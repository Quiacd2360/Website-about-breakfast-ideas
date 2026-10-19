/* Chế độ tối tự động theo giờ + nút bật/tắt thủ công*/
(function () {
  const KEY = "breakfast-theme";
  const DARK_FROM = 18; // từ 18h trở đi là tối
  const DARK_TO = 6; // đến trước 6h sáng
  const root = document.documentElement;

  let manual = null; // lựa chọn tay (dự phòng khi localStorage bị chặn)
  let btn = null;

  const isNight = () => {
    const h = new Date().getHours();
    return h >= DARK_FROM || h < DARK_TO;
  };
  const readChoice = () => {
    const now = Date.now();
    const night = isNight();
    if (manual && manual.night === night && manual.expiresAt > now) {
      return manual.theme;
    }
    manual = null;
    try {
      const s = JSON.parse(localStorage.getItem(KEY));
      if (
        s &&
        (s.theme === "dark" || s.theme === "light") &&
        s.night === night &&
        typeof s.expiresAt === "number" &&
        s.expiresAt > now
      ) {
        return s.theme;
      }
    } catch (e) {}
    return null;
  };

  const saveChoice = (theme) => {
    const expiresAt = new Date();
    const hour = expiresAt.getHours();
    const night = isNight();
    if (hour >= DARK_FROM) {
      expiresAt.setDate(expiresAt.getDate() + 1);
      expiresAt.setHours(DARK_TO, 0, 0, 0);
    } else if (hour < DARK_TO) {
      expiresAt.setHours(DARK_TO, 0, 0, 0);
    } else {
      expiresAt.setHours(DARK_FROM, 0, 0, 0);
    }

    manual = { theme, night, expiresAt: expiresAt.getTime() };
    try {
      localStorage.setItem(KEY, JSON.stringify(manual));
    } catch (e) {}
  };

  const updateButton = (theme) => {
    if (!btn) return;
    const dark = theme === "dark";
    btn.textContent = dark ? "☀️" : "🌙";
    const label = dark
      ? "Chuyển sang giao diện sáng"
      : "Chuyển sang giao diện tối";
    btn.setAttribute("aria-label", label);
    btn.title = label;
  };

  const apply = () => {
    const theme = readChoice() || (isNight() ? "dark" : "light");
    root.setAttribute("data-theme", theme);
    updateButton(theme);
  };

  apply(); // chạy ngay khi tải để không bị nháy

  document.addEventListener("DOMContentLoaded", () => {
    btn = document.createElement("button");
    btn.type = "button";
    btn.className = "theme-toggle";
    document.body.appendChild(btn);
    btn.addEventListener("click", () => {
      const next =
        root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      saveChoice(next);
      apply();
    });
    apply();
  });

  // Nếu để trang mở qua 18h thì tự chuyển sang tối
  setInterval(apply, 5 * 60 * 1000);
})();
