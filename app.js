// === СЛОВАРЬ НА 4 ЯЗЫКА ===
const translations = {
  ru: {
    nav_plan: "Мой План",
    nav_dash: "Дашборд",
    nav_scan: "AI Сканер Еды",
    nav_search: "База Продуктов",
    download_zip: "Скачать .ZIP",
    // Index / Plan
    plan_title: "Создайте персональный план похудения",
    plan_sub: "Введите свои параметры, желаемый сброс веса и срок для точного расчета дневной нормы КБЖУ",
    lbl_weight: "Текущий вес (кг)",
    lbl_height: "Рост (см)",
    lbl_age: "Возраст",
    lbl_loss: "На сколько кг хотите похудеть?",
    lbl_months: "Срок плана (месяцев)",
    lbl_activity: "Уровень активности",
    act_low: "Низкий (сидячий образ)",
    act_med: "Средний (тренировки 2-3 раза)",
    act_high: "Высокий (активный спорт)",
    btn_calc: "Рассчитать план и норму",
    res_title: "Ваш план готов!",
    res_daily: "Дневная норма калорий",
    res_deficit: "Безопасный дефицит в день",
    protein: "Белки",
    fats: "Жиры",
    carbs: "Углеводы",
    go_dash: "Перейти в дневник →",
    // Dashboard
    dash_title: "Дневной баланс калорий и БЖУ",
    kcal_left: "Осталось ккал",
    kcal_eaten: "Съедено",
    kcal_goal: "Норма",
    rem_protein: "Осталось белков",
    rem_fats: "Осталось жиров",
    rem_carbs: "Осталось углеводов",
    history_title: "Съедено сегодня",
    empty_history: "Приемов пищи пока нет. Используйте AI Сканер или Поиск продуктов.",
    btn_reset_day: "Сбросить день",
    // Scanner
    scan_title: "AI Распознавание еды по фото",
    scan_sub: "Загрузите фото блюда. Перед вычитанием калорий вы сможете проверить и изменить продукт или вес.",
    upload_prompt: "Нажмите или перетащите фото еды сюда",
    analyzing: "Анализируем состав и вес порции...",
    verify_title: "Проверка распознанного блюда",
    verify_hint: "Неправильно распознано? Выберите другой продукт или скорректируйте вес перед вычитанием:",
    lbl_detected_food: "Распознанный продукт",
    lbl_portion: "Вес порции (грамм)",
    btn_confirm_deduct: "Подтвердить и минусовать из дневной нормы",
    btn_reupload: "Загрузить другое фото",
    // Search
    search_title: "Калькулятор калорийности по граммам",
    search_placeholder: "Поиск продукта (например: Плов, Курица, Яблоко, Овсянка)...",
    lbl_grams: "Граммы:",
    btn_add_meal: "+ В дневник",
    per_100g: "на 100 г",
    gram_unit: "г",
    kcal_unit: "ккал"
  },
  uz_lat: {
    nav_plan: "Rejam",
    nav_dash: "Kunlik Hisob",
    nav_scan: "AI Ovqat Skaneri",
    nav_search: "Mahsulotlar",
    download_zip: ".ZIP Yuklash",
    plan_title: "Shaxsiy ozish rejangizni yarating",
    plan_sub: "Kunlik kaloriya va BJU me'yorini hisoblash uchun vazn, bo'y va maqsadingizni kiriting",
    lbl_weight: "Hozirgi vazn (kg)",
    lbl_height: "Bo'y (sm)",
    lbl_age: "Yosh",
    lbl_loss: "Necha kg ga ozmoqchisiz?",
    lbl_months: "Reja muddati (oy)",
    lbl_activity: "Faollik darajasi",
    act_low: "Past (kam harakatli)",
    act_med: "O'rtacha (haftada 2-3 mashq)",
    act_high: "Yuqori (faol sport)",
    btn_calc: "Rejani hisoblash",
    res_title: "Rejangiz tayyor!",
    res_daily: "Kunlik kaloriya me'yori",
    res_deficit: "Kunlik kaloriya defitsiti",
    protein: "Oqsillar",
    fats: "Yog'lar",
    carbs: "Uglevodlar",
    go_dash: "Kundalikka o'tish →",
    dash_title: "Kunlik kaloriya va BJU balansi",
    kcal_left: "Qolgan kkal",
    kcal_eaten: "Yeyildi",
    kcal_goal: "Me'yor",
    rem_protein: "Qolgan oqsil",
    rem_fats: "Qolgan yog'",
    rem_carbs: "Qolgan uglevod",
    history_title: "Bugun iste'mol qilinganlar",
    empty_history: "Hozircha ovqat qo'shilmagan. AI Skaner yoki Qidiruvdan foydalaning.",
    btn_reset_day: "Kunni tozalash",
    scan_title: "Rasm orqali ovqatni aniqlash (AI)",
    scan_sub: "Ovqat rasmini yuklang. Kaloriyani ayirishdan oldin mahsulot yoki grammni o'zgartirishingiz mumkin.",
    upload_prompt: "Ovqat rasmini yuklash uchun bosing",
    analyzing: "Tarkibi va vazni aniqlanmoqda...",
    verify_title: "Aniqlangan taomni tekshirish",
    verify_hint: "Noto'g'ri aniqlandimi? Kunlik me'yordan ayirishdan oldin mahsulotni yoki vaznni o'zgartiring:",
    lbl_detected_food: "Aniqlangan taom",
    lbl_portion: "Porsiya vazni (gramm)",
    btn_confirm_deduct: "Tasdiqlash va kunlik me'yordan ayirish",
    btn_reupload: "Boshqa rasm yuklash",
    search_title: "Gramm bo'yicha kaloriya qidiruvi",
    search_placeholder: "Mahsulot qidirish (masalan: Osh, Tovuq, Olma, Tuxum)...",
    lbl_grams: "Gramm:",
    btn_add_meal: "+ Qo'shish",
    per_100g: "100 g uchun",
    gram_unit: "g",
    kcal_unit: "kkal"
  },
  uz_cyr: {
    nav_plan: "Режам",
    nav_dash: "Кунлик Ҳисоб",
    nav_scan: "AI Овқат Сканери",
    nav_search: "Маҳсулотлар",
    download_zip: ".ZIP Юклаш",
    plan_title: "Шахсий озиш режангизни яратинг",
    plan_sub: "Кунлик калория ва БЖУ меъёрини ҳисоблаш учун вазн, бўй ва мақсадингизни киритинг",
    lbl_weight: "Ҳозирги вазн (кг)",
    lbl_height: "Бўй (см)",
    lbl_age: "Ёш",
    lbl_loss: "Неча кг га озмоқчисиз?",
    lbl_months: "Режа муддати (ой)",
    lbl_activity: "Фаоллик даражаси",
    act_low: "Паст (кам ҳаракатли)",
    act_med: "Ўртача (ҳафтада 2-3 машқ)",
    act_high: "Юқори (фаол спорт)",
    btn_calc: "Режани ҳисоблаш",
    res_title: "Режангиз тайёр!",
    res_daily: "Кунлик калория меъёри",
    res_deficit: "Кунлик калория дефицити",
    protein: "Оқсиллар",
    fats: "Ёғлар",
    carbs: "Углеводлар",
    go_dash: "Кундаликка ўтиш →",
    dash_title: "Кунлик калория ва БЖУ баланси",
    kcal_left: "Қолган ккал",
    kcal_eaten: "Ейилди",
    kcal_goal: "Меъёр",
    rem_protein: "Қолган оқсил",
    rem_fats: "Қолган ёғ",
    rem_carbs: "Қолган углевод",
    history_title: "Бугун истеъмол қилинганлар",
    empty_history: "Ҳозирча овқат қўшилмаган. AI Сканер ёки Қидирувдан фойдаланинг.",
    btn_reset_day: "Кунни тозалаш",
    scan_title: "Расм орқали овқатни аниқлаш (AI)",
    scan_sub: "Овқат расмини юкланг. Калорияни айиришдан олдин маҳсулот ёки граммни ўзгартиришингиз мумкин.",
    upload_prompt: "Овқат расмини юклаш учун босинг",
    analyzing: "Таркиби ва вазни аниқланмоқда...",
    verify_title: "Аниқланган таомни текшириш",
    verify_hint: "Нотўғри аниқландими? Кунлик меъёрдан айиришдан олдин маҳсулотни ёки вазнни ўзгартиринг:",
    lbl_detected_food: "Аниқланган таом",
    lbl_portion: "Порция вазни (грамм)",
    btn_confirm_deduct: "Тасдиқлаш ва кунлик меъёрдан айириш",
    btn_reupload: "Бошқа расм юклаш",
    search_title: "Грамм бўйича калория қидируви",
    search_placeholder: "Маҳсулот қидириш (масалан: Ош, Товуқ, Олма, Тухум)...",
    lbl_grams: "Грамм:",
    btn_add_meal: "+ Қўшиш",
    per_100g: "100 г учун",
    gram_unit: "г",
    kcal_unit: "ккал"
  },
  en: {
    nav_plan: "My Plan",
    nav_dash: "Dashboard",
    nav_scan: "AI Food Scanner",
    nav_search: "Food Database",
    download_zip: "Download .ZIP",
    plan_title: "Create Your Weight Loss Plan",
    plan_sub: "Enter your height, weight, target weight loss, and timeframe to calculate daily macros",
    lbl_weight: "Current Weight (kg)",
    lbl_height: "Height (cm)",
    lbl_age: "Age",
    lbl_loss: "Target Weight Loss (kg)",
    lbl_months: "Duration (Months)",
    lbl_activity: "Activity Level",
    act_low: "Sedentary (little exercise)",
    act_med: "Moderate (2-3 workouts/week)",
    act_high: "Active (daily workouts)",
    btn_calc: "Calculate Daily Plan",
    res_title: "Your Plan is Ready!",
    res_daily: "Daily Calorie Target",
    res_deficit: "Daily Calorie Deficit",
    protein: "Protein",
    fats: "Fats",
    carbs: "Carbs",
    go_dash: "Go to Dashboard →",
    dash_title: "Daily Calorie & Macro Balance",
    kcal_left: "Kcal Remaining",
    kcal_eaten: "Consumed",
    kcal_goal: "Target",
    rem_protein: "Protein Left",
    rem_fats: "Fats Left",
    rem_carbs: "Carbs Left",
    history_title: "Today's Meals",
    empty_history: "No meals logged yet. Use the AI Scanner or Food Database.",
    btn_reset_day: "Reset Day",
    scan_title: "AI Photo Food Recognition",
    scan_sub: "Upload a meal photo. Review and edit the detected food or weight before deducting calories.",
    upload_prompt: "Click or drop a food photo here",
    analyzing: "Analyzing dish and portion size...",
    verify_title: "Verify Detected Meal",
    verify_hint: "Wrong detection? Change the food item or adjust grams before deducting from daily goals:",
    lbl_detected_food: "Detected Food Item",
    lbl_portion: "Portion Weight (grams)",
    btn_confirm_deduct: "Confirm & Deduct from Daily Goal",
    btn_reupload: "Upload Another Photo",
    search_title: "Calorie & Macro Lookup by Grams",
    search_placeholder: "Search food (e.g., Plov, Chicken, Apple, Oats)...",
    lbl_grams: "Grams:",
    btn_add_meal: "+ Log Meal",
    per_100g: "per 100g",
    gram_unit: "g",
    kcal_unit: "kcal"
  }
};

// === БАЗА ПРОДУКТОВ (на 100 грамм) ===
const foodDatabase = [
  { id: 1, name: { ru: "Куриная грудка (филе)", uz_lat: "Tovuq filesi", uz_cyr: "Товуқ филеси", en: "Chicken Breast" }, kcal: 165, p: 31, f: 3.6, c: 0, icon: "🍗" },
  { id: 2, name: { ru: "Плов узбекский с говядиной", uz_lat: "O'zbek oshi (mol go'shti)", uz_cyr: "Ўзбек оши (мол гўшти)", en: "Uzbek Beef Plov" }, kcal: 215, p: 8.5, f: 11.2, c: 21.4, icon: "🍛" },
  { id: 3, name: { ru: "Рис отварной белый", uz_lat: "Qaynatilgan oq guruch", uz_cyr: "Қайнатилган оқ гуруч", en: "Boiled White Rice" }, kcal: 130, p: 2.7, f: 0.3, c: 28, icon: "🍚" },
  { id: 4, name: { ru: "Гречка отварная", uz_lat: "Qaynatilgan grechka", uz_cyr: "Қайнатилган гречка", en: "Boiled Buckwheat" }, kcal: 110, p: 4.2, f: 1.1, c: 21.3, icon: "🥣" },
  { id: 5, name: { ru: "Яйцо куриное (варен.)", uz_lat: "Tovuq tuxumi", uz_cyr: "Товуқ тухуми", en: "Boiled Egg" }, kcal: 155, p: 12.6, f: 10.6, c: 1.1, icon: "🥚" },
  { id: 6, name: { ru: "Овсяная каша", uz_lat: "Suli bo'tqasi (Ovsyanka)", uz_cyr: "Сули бўтқаси (Овсянка)", en: "Oatmeal Porridge" }, kcal: 120, p: 4.0, f: 2.5, c: 21.0, icon: "🥣" },
  { id: 7, name: { ru: "Салат Цезарь с курицей", uz_lat: "Sezar salati", uz_cyr: "Цезарь салати", en: "Chicken Caesar Salad" }, kcal: 175, p: 11.5, f: 11.0, c: 6.5, icon: "🥗" },
  { id: 8, name: { ru: "Говядина тушеная", uz_lat: "Dimlangan mol go'shti", uz_cyr: "Димланган мол гўшти", en: "Braised Beef" }, kcal: 232, p: 25.0, f: 14.5, c: 0, icon: "🥩" },
  { id: 9, name: { ru: "Самса с мясом (запеченная)", uz_lat: "Go'shtli somsa", uz_cyr: "Гўштли сомса", en: "Meat Samsa" }, kcal: 265, p: 9.8, f: 14.2, c: 24.5, icon: "🥟" },
  { id: 10, name: { ru: "Яблоко свежее", uz_lat: "Yangi olma", uz_cyr: "Янги олма", en: "Fresh Apple" }, kcal: 52, p: 0.3, f: 0.2, c: 13.8, icon: "🍎" },
  { id: 11, name: { ru: "Банан", uz_lat: "Banan", uz_cyr: "Банан", en: "Banana" }, kcal: 89, p: 1.1, f: 0.3, c: 22.8, icon: "🍌" },
  { id: 12, name: { ru: "Творог 5%", uz_lat: "Tvorog 5%", uz_cyr: "Творог 5%", en: "Cottage Cheese 5%" }, kcal: 121, p: 17.2, f: 5.0, c: 1.8, icon: "🧀" },
  { id: 13, name: { ru: "Лосось / Семга на гриле", uz_lat: "Grilda pishirilgan losos", uz_cyr: "Грилда пиширилган лосось", en: "Grilled Salmon" }, kcal: 208, p: 20.4, f: 13.4, c: 0, icon: "🐟" },
  { id: 14, name: { ru: "Авокадо", uz_lat: "Avokado", uz_cyr: "Авокадо", en: "Avocado" }, kcal: 160, p: 2.0, f: 14.7, c: 8.5, icon: "🥑" }
];

// === УПРАВЛЕНИЕ СОСТОЯНИЕМ ===
// === РАСЧЁТ ПЛАНА (формула Миффлина — Сан Жеора, с учётом пола) ===
function calcPlan({ weight, height, age, lossKg, months, activity, gender }) {
  const bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'female' ? -161 : 5);
  const tdee = bmr * activity;
  const days = months * 30;
  const wanted = (lossKg * 7700) / days;                 // 1 кг жира ≈ 7700 ккал
  const maxDeficit = Math.min(1000, Math.round(tdee * 0.25)); // безопасно: не больше 25% от нормы
  const minKcal = gender === 'female' ? 1200 : 1500;
  const dailyKcal = Math.max(minKcal, Math.round(tdee - Math.min(wanted, maxDeficit)));
  const dailyDeficit = Math.max(0, Math.round(tdee - dailyKcal)); // реальный дефицит
  const needDays = dailyDeficit > 0 ? Math.ceil((lossKg * 7700) / dailyDeficit) : null;
  return {
    weight, height, age, lossKg, months, activity, gender: gender || 'male',
    tdee: Math.round(tdee), dailyKcal, dailyDeficit, needDays,
    protein: Math.round((dailyKcal * 0.30) / 4),
    fats: Math.round((dailyKcal * 0.25) / 9),
    carbs: Math.round((dailyKcal * 0.45) / 4)
  };
}

const defaultState = {
  lang: 'ru',
  theme: 'dark',
  user: null, // { name, email, gender, avatar, createdAt }
  plan: calcPlan({ weight: 80, height: 175, age: 25, lossKg: 6, months: 3, activity: 1.375, gender: 'male' }),
  consumed: [] // { uid, foodId, grams, kcal, p, f, c, time }
};

function getState() {
  let saved = null;
  try { saved = JSON.parse(localStorage.getItem('nutriTrackState')); } catch (e) {}
  if (!saved) return JSON.parse(JSON.stringify(defaultState));
  return { ...defaultState, ...saved, plan: { ...defaultState.plan, ...(saved.plan || {}) } };
}

function saveState(state) {
  localStorage.setItem('nutriTrackState', JSON.stringify(state));
}

function t(key) {
  const state = getState();
  return translations[state.lang]?.[key] || translations['ru'][key] || key;
}

// === ПРИМЕНЕНИЕ ТЕМЫ И ЯЗЫКА ===
function applyThemeAndLang() {
  const state = getState();
  document.documentElement.classList.toggle('dark', state.theme === 'dark');

  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = state.lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });

  injectIcons();
  renderAccountChip();
  renderLangMenu();
}

function toggleTheme(e) {
  const state = getState();
  state.theme = state.theme === 'dark' ? 'light' : 'dark';
  const apply = () => { saveState(state); applyThemeAndLang(); };
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!document.startViewTransition || reduced) { apply(); return; }

  // круговое «проявление» новой темы от кнопки
  const b = e && e.currentTarget ? e.currentTarget.getBoundingClientRect() : null;
  const x = b ? b.left + b.width / 2 : window.innerWidth - 40;
  const y = b ? b.top + b.height / 2 : 30;
  const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const root = document.documentElement;
  root.classList.add('theme-switching');
  const vt = document.startViewTransition(apply);
  vt.ready.then(() => root.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
    { duration: 650, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' }
  ));
  vt.finished.finally(() => root.classList.remove('theme-switching'));
}

function changeLang(newLang) {
  const state = getState();
  state.lang = newLang;
  saveState(state);
  applyThemeAndLang();
  if (typeof renderPageSpecific === 'function') renderPageSpecific();
}

// === ДОБАВЛЕНИЕ ПРИЕМА ПИЩИ И ВЫЧИТАНИЕ ИЗ НОРМЫ ===
function addMealRecord(foodId, grams) {
  const food = foodDatabase.find(f => f.id === Number(foodId));
  if (!food || !(grams > 0)) return;
  grams = Math.round(Math.min(grams, 5000)); // целые граммы, как и в предпросмотре
  const ratio = grams / 100;
  const meal = {
    uid: Date.now() * 1000 + Math.floor(Math.random() * 1000), // уникальный, даже если добавлено несколько за раз
    foodId: food.id,
    grams: Math.round(grams),
    kcal: Math.round(food.kcal * ratio * 10) / 10,
    p: Math.round(food.p * ratio * 10) / 10,
    f: Math.round(food.f * ratio * 10) / 10,
    c: Math.round(food.c * ratio * 10) / 10,
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  };

  const state = getState();
  state.consumed.unshift(meal);
  saveState(state);
}

// === ЭКСПОРТ ВСЕГО ПРОЕКТА В ZIP АРХИВ ===
async function downloadProjectZip() {
  if (typeof JSZip === 'undefined') {
    alert('Загрузка модуля архивации JSZip...');
    return;
  }
  const zip = new JSZip();
  const files = ['index.html', 'dashboard.html', 'scanner.html', 'search.html', 'register.html', 'profile.html', 'style.css', 'app.js'];
  
  for (const file of files) {
    try {
      const resp = await fetch(file);
      if (resp.ok) {
        const text = await resp.text();
        zip.file(file, text);
      }
    } catch (e) {
      console.warn('Локальный запуск: для экспорта откройте через Live Server');
    }
  }
  
  const content = await zip.generateAsync({ type: "blob" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(content);
  link.download = "ChangeFit-Project.zip";
  link.click();
}

document.addEventListener('DOMContentLoaded', () => {
  applyThemeAndLang();
  if (typeof renderPageSpecific === 'function') renderPageSpecific();
  initPreloader();
});
// ============================================================
// v2: новые переводы, иконки, анимации, аккаунт, прелоадер
// ============================================================
Object.assign(translations.ru, {
  tab_reg: "Регистрация", tab_login: "Вход",
  reg_title: "Создайте аккаунт", reg_sub: "После регистрации вы попадёте в свой профиль",
  login_title: "С возвращением",
  lbl_name: "Имя", lbl_email: "Эл. почта", lbl_pass: "Пароль (от 6 символов)",
  lbl_gender: "Пол", gender_m: "Мужской", gender_f: "Женский",
  btn_register: "Создать аккаунт", btn_login: "Войти",
  err_exists: "Этот email уже зарегистрирован", err_wrong: "Неверный email или пароль",
  err_short: "Пароль должен быть не короче 6 символов", err_fill: "Заполните все поля",
  added_ok: "Готово!", over_label: "Перебор",
  warn_slow: "Безопасный дефицит не даёт достичь цели за этот срок — нужно примерно {n} дн.",
  prof_title: "Профиль", prof_plan: "Мой план", prof_today: "Сегодня",
  btn_logout: "Выйти", btn_save: "Сохранить", saved_ok: "Сохранено",
  prof_photo: "Сменить фото", prof_since: "Аккаунт создан", lbl_goal: "Цель",
  lbl_target_kcal: "Норма в день", edit_plan: "Изменить план", meals_count: "Приёмов пищи"
});
Object.assign(translations.en, {
  tab_reg: "Sign up", tab_login: "Log in",
  reg_title: "Create your account", reg_sub: "You'll land in your profile after signing up",
  login_title: "Welcome back",
  lbl_name: "Name", lbl_email: "Email", lbl_pass: "Password (6+ characters)",
  lbl_gender: "Gender", gender_m: "Male", gender_f: "Female",
  btn_register: "Create account", btn_login: "Log in",
  err_exists: "This email is already registered", err_wrong: "Wrong email or password",
  err_short: "Password must be at least 6 characters", err_fill: "Fill in all fields",
  added_ok: "Done!", over_label: "Over limit",
  warn_slow: "A safe deficit can't reach this goal in time — plan for about {n} days.",
  prof_title: "Profile", prof_plan: "My plan", prof_today: "Today",
  btn_logout: "Log out", btn_save: "Save changes", saved_ok: "Saved",
  prof_photo: "Change photo", prof_since: "Member since", lbl_goal: "Goal",
  lbl_target_kcal: "Daily target", edit_plan: "Edit plan", meals_count: "Meals logged"
});
Object.assign(translations.uz_lat, {
  tab_reg: "Ro'yxatdan o'tish", tab_login: "Kirish",
  reg_title: "Akkaunt yarating", reg_sub: "Ro'yxatdan o'tgach profilingizga o'tasiz",
  login_title: "Qaytganingiz bilan",
  lbl_name: "Ism", lbl_email: "Email", lbl_pass: "Parol (kamida 6 belgi)",
  lbl_gender: "Jins", gender_m: "Erkak", gender_f: "Ayol",
  btn_register: "Akkaunt yaratish", btn_login: "Kirish",
  err_exists: "Bu email allaqachon ro'yxatdan o'tgan", err_wrong: "Email yoki parol noto'g'ri",
  err_short: "Parol kamida 6 belgidan iborat bo'lsin", err_fill: "Barcha maydonlarni to'ldiring",
  added_ok: "Tayyor!", over_label: "Me'yordan oshdi",
  warn_slow: "Xavfsiz defitsit bilan bu maqsadga yetish uchun taxminan {n} kun kerak.",
  prof_title: "Profil", prof_plan: "Mening rejam", prof_today: "Bugun",
  btn_logout: "Chiqish", btn_save: "Saqlash", saved_ok: "Saqlandi",
  prof_photo: "Rasmni almashtirish", prof_since: "Akkaunt yaratilgan", lbl_goal: "Maqsad",
  lbl_target_kcal: "Kunlik me'yor", edit_plan: "Rejani o'zgartirish", meals_count: "Ovqatlanishlar"
});
Object.assign(translations.uz_cyr, {
  tab_reg: "Рўйхатдан ўтиш", tab_login: "Кириш",
  reg_title: "Аккаунт яратинг", reg_sub: "Рўйхатдан ўтгач профилингизга ўтасиз",
  login_title: "Қайтганингиз билан",
  lbl_name: "Исм", lbl_email: "Эл. почта", lbl_pass: "Парол (камида 6 белги)",
  lbl_gender: "Жинс", gender_m: "Эркак", gender_f: "Аёл",
  btn_register: "Аккаунт яратиш", btn_login: "Кириш",
  err_exists: "Бу email аллақачон рўйхатдан ўтган", err_wrong: "Email ёки парол нотўғри",
  err_short: "Парол камида 6 белгидан иборат бўлсин", err_fill: "Барча майдонларни тўлдиринг",
  added_ok: "Тайёр!", over_label: "Меъёрдан ошди",
  warn_slow: "Хавфсиз дефицит билан бу мақсадга етиш учун тахминан {n} кун керак.",
  prof_title: "Профил", prof_plan: "Менинг режам", prof_today: "Бугун",
  btn_logout: "Чиқиш", btn_save: "Сақлаш", saved_ok: "Сақланди",
  prof_photo: "Расмни алмаштириш", prof_since: "Аккаунт яратилган", lbl_goal: "Мақсад",
  lbl_target_kcal: "Кунлик меъёр", edit_plan: "Режани ўзгартириш", meals_count: "Овқатланишлар"
});

// === ИКОНКИ (SVG, стиль Lucide) ===
const ICONS = {
  plan: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  dash: '<rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/>',
  scan: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  user: '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  dumbbell: '<path d="M6.5 6.5v11"/><path d="M17.5 6.5v11"/><path d="M3.5 9v6"/><path d="M20.5 9v6"/><path d="M6.5 12h11"/>',
  drop: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  zap: '<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  utensils: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>'
};
function icon(name) {
  return `<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}
function injectIcons() {
  const map = { 'index.html': 'plan', 'dashboard.html': 'dash', 'scanner.html': 'scan', 'search.html': 'search' };
  document.querySelectorAll('.nav-link').forEach(a => {
    if (!a.querySelector('.ico')) a.insertAdjacentHTML('afterbegin', icon(map[a.getAttribute('href')] || 'plan'));
  });
  document.querySelectorAll('[data-icon]').forEach(el => {
    if (!el.firstChild) el.innerHTML = icon(el.dataset.icon);
  });
}

// === АНИМАЦИЯ ЧИСЕЛ (плавный счётчик) ===
function animateNumber(el, to, dur = 700) {
  if (!el) return;
  const from = el.dataset.v !== undefined ? parseFloat(el.dataset.v) : 0;
  el.dataset.v = to;
  if (from === to || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = to;
    return;
  }
  const t0 = performance.now();
  (function step(now) {
    const k = Math.min(1, (now - t0) / dur);
    el.textContent = Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  })(t0);
}

// === ГАЛОЧКА УСПЕХА, потом переход ===
function showDone(cb) {
  const o = document.createElement('div');
  o.id = 'doneOverlay';
  o.innerHTML = `<div class="done-card"><svg viewBox="0 0 52 52" width="72" height="72"><circle class="done-c" cx="26" cy="26" r="24"/><path class="done-p" d="M14 27l8 8 16-17"/></svg><p class="font-extrabold mt-2">${t('added_ok')}</p></div>`;
  document.body.appendChild(o);
  setTimeout(cb, 1000);
}

// === ПРЕЛОАДЕР: кольцо заполняется, число калорий растёт до вашей нормы ===
function initPreloader() {
  const pl = document.getElementById('preloader');
  if (!pl) return;
  const num = document.getElementById('plNum');
  const target = getState().plan.dailyKcal || 2000;
  const dur = 1300, t0 = performance.now();
  (function step(now) {
    const k = Math.min(1, (now - t0) / dur);
    num.textContent = Math.round(target * (1 - Math.pow(1 - k, 3)));
    if (k < 1) requestAnimationFrame(step);
  })(t0);
  setTimeout(() => {
    pl.classList.add('done');
    sessionStorage.setItem('nt_pl', '1');
    setTimeout(() => pl.remove(), 600);
  }, dur + 250);
}

// === АККАУНТ (данные хранятся только в браузере) ===
function getUsers() {
  try { return JSON.parse(localStorage.getItem('nutriTrackUsers')) || {}; } catch (e) { return {}; }
}
function saveUsers(u) { localStorage.setItem('nutriTrackUsers', JSON.stringify(u)); }

async function hashPass(p) {
  const salt = 'nt1:' + p;
  if (window.crypto && crypto.subtle) {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(salt));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  }
  let h = 5381;
  for (const c of salt) h = ((h << 5) + h + c.charCodeAt(0)) | 0;
  return 'f' + h;
}

async function registerUser({ name, email, pass, gender }) {
  const users = getUsers();
  if (users[email]) return { ok: false, err: 'err_exists' };
  const createdAt = Date.now();
  users[email] = { name, gender, passHash: await hashPass(pass), avatar: '', createdAt };
  saveUsers(users);
  const s = getState();
  s.user = { name, email, gender, avatar: '', createdAt };
  s.plan = calcPlan({ ...s.plan, gender });
  saveState(s);
  return { ok: true };
}

async function loginUser(email, pass) {
  const u = getUsers()[email];
  if (!u || u.passHash !== await hashPass(pass)) return { ok: false, err: 'err_wrong' };
  const s = getState();
  s.user = { name: u.name, email, gender: u.gender, avatar: u.avatar || '', createdAt: u.createdAt };
  s.plan = calcPlan({ ...s.plan, gender: u.gender });
  saveState(s);
  return { ok: true };
}

function logout() {
  const s = getState();
  s.user = null;
  saveState(s);
  window.location.href = 'register.html';
}

function setAvatar(el, user) {
  if (!el) return;
  if (user.avatar) {
    el.style.backgroundImage = `url(${user.avatar})`;
    el.textContent = '';
  } else {
    el.style.backgroundImage = '';
    el.textContent = (user.name || '?').trim().charAt(0).toUpperCase();
  }
}

function renderAccountChip() {
  const el = document.getElementById('accountChip');
  if (!el) return;
  const u = getState().user;
  if (u) {
    el.href = 'profile.html';
    el.innerHTML = '<span class="avatar"></span><span class="hidden sm:inline"></span>';
    setAvatar(el.firstChild, u);
    el.lastChild.textContent = u.name.trim().split(' ')[0];
  } else {
    el.href = 'register.html';
    el.innerHTML = `<span class="avatar">${icon('user')}</span><span class="hidden sm:inline">${t('btn_login')}</span>`;
  }
}

// === ВЫБОР ЯЗЫКА (кастомный список в стиле сайта) ===
ICONS.check = '<path d="M20 6 9 17l-5-5"/>';
ICONS.chev = '<path d="m6 9 6 6 6-6"/>';
const LANGS = [
  { id: 'ru', code: 'RU', name: 'Русский' },
  { id: 'uz_lat', code: 'UZ', name: "O'zbekcha" },
  { id: 'uz_cyr', code: 'ЎЗ', name: 'Ўзбекча' },
  { id: 'en', code: 'EN', name: 'English' }
];
function renderLangMenu() {
  const box = document.getElementById('langMenu');
  if (!box) return;
  const cur = getState().lang;
  const c = LANGS.find(l => l.id === cur) || LANGS[0];
  box.innerHTML = `
    <button type="button" class="lang-btn" aria-haspopup="listbox" aria-expanded="${box.classList.contains('open')}" onclick="toggleLangMenu(event)">
      <span class="lang-code">${c.code}</span><span class="lang-name">${c.name}</span>${icon('chev').replace('class="ico"', 'class="ico lang-chev"')}
    </button>
    <ul class="lang-list" role="listbox">
      ${LANGS.map(l => `<li><button type="button" role="option" aria-selected="${l.id === cur}" class="lang-item${l.id === cur ? ' active' : ''}" onclick="pickLang('${l.id}')"><span class="lang-code">${l.code}</span><span>${l.name}</span>${l.id === cur ? icon('check') : ''}</button></li>`).join('')}
    </ul>`;
}
function toggleLangMenu(e) {
  e.stopPropagation();
  const box = document.getElementById('langMenu');
  box.classList.toggle('open');
  box.querySelector('.lang-btn').setAttribute('aria-expanded', box.classList.contains('open'));
}
function pickLang(id) {
  document.getElementById('langMenu').classList.remove('open');
  changeLang(id);
}
document.addEventListener('click', () => document.getElementById('langMenu')?.classList.remove('open'));
document.addEventListener('keydown', e => { if (e.key === 'Escape') document.getElementById('langMenu')?.classList.remove('open'); });


// ============================================================
// РАСШИРЕННАЯ БАЗА ПРОДУКТОВ (значения на 100 г, ориентир — USDA и таблицы Химического состава)
// ============================================================
const CATS = {
  all:   { ru: "Все", uz_lat: "Hammasi", uz_cyr: "Ҳаммаси", en: "All" },
  fruit: { ru: "Фрукты", uz_lat: "Mevalar", uz_cyr: "Мевалар", en: "Fruits" },
  veg:   { ru: "Овощи", uz_lat: "Sabzavotlar", uz_cyr: "Сабзавотлар", en: "Vegetables" },
  meat:  { ru: "Мясо и рыба", uz_lat: "Go'sht va baliq", uz_cyr: "Гўшт ва балиқ", en: "Meat & fish" },
  dairy: { ru: "Молочное", uz_lat: "Sut mahsulotlari", uz_cyr: "Сут маҳсулотлари", en: "Dairy" },
  grain: { ru: "Крупы и хлеб", uz_lat: "Yorma va non", uz_cyr: "Ёрма ва нон", en: "Grains & bread" },
  dish:  { ru: "Блюда", uz_lat: "Taomlar", uz_cyr: "Таомлар", en: "Dishes" },
  nuts:  { ru: "Орехи", uz_lat: "Yong'oqlar", uz_cyr: "Ёнғоқлар", en: "Nuts" },
  sweet: { ru: "Сладкое", uz_lat: "Shirinliklar", uz_cyr: "Ширинликлар", en: "Sweets" },
  other: { ru: "Напитки и масла", uz_lat: "Ichimlik va yog'lar", uz_cyr: "Ичимлик ва ёғлар", en: "Drinks & oils" }
};
const CAT_OF_OLD = { 1: 'meat', 2: 'dish', 3: 'grain', 4: 'grain', 5: 'meat', 6: 'grain', 7: 'dish', 8: 'meat', 9: 'dish', 10: 'fruit', 11: 'fruit', 12: 'dairy', 13: 'meat', 14: 'fruit' };
foodDatabase.forEach(f => { f.cat = CAT_OF_OLD[f.id] || 'other'; });

// [категория, ru, uz_lat, uz_cyr, en, ккал, белки, жиры, углеводы, иконка]
const EXTRA_FOODS = [
  ["fruit", "Виноград", "Uzum", "Узум", "Grapes", 69, 0.7, 0.2, 18.1, "🍇"],
  ["fruit", "Апельсин", "Apelsin", "Апельсин", "Orange", 47, 0.9, 0.1, 11.8, "🍊"],
  ["fruit", "Мандарин", "Mandarin", "Мандарин", "Mandarin", 53, 0.8, 0.3, 13.3, "🍊"],
  ["fruit", "Груша", "Nok", "Нок", "Pear", 57, 0.4, 0.1, 15.2, "🍐"],
  ["fruit", "Персик", "Shaftoli", "Шафтоли", "Peach", 39, 0.9, 0.3, 9.5, "🍑"],
  ["fruit", "Абрикос", "O'rik", "Ўрик", "Apricot", 48, 1.4, 0.4, 11.1, "🍑"],
  ["fruit", "Арбуз", "Tarvuz", "Тарвуз", "Watermelon", 30, 0.6, 0.2, 7.6, "🍉"],
  ["fruit", "Дыня", "Qovun", "Қовун", "Melon", 34, 0.8, 0.2, 8.2, "🍈"],
  ["fruit", "Клубника", "Qulupnay", "Қулупнай", "Strawberry", 32, 0.7, 0.3, 7.7, "🍓"],
  ["fruit", "Гранат", "Anor", "Анор", "Pomegranate", 83, 1.7, 1.2, 18.7, "🔴"],
  ["fruit", "Черешня", "Gilos", "Гилос", "Cherries", 63, 1.1, 0.2, 16, "🍒"],
  ["fruit", "Киви", "Kivi", "Киви", "Kiwi", 61, 1.1, 0.5, 14.7, "🥝"],
  ["fruit", "Ананас", "Ananas", "Ананас", "Pineapple", 50, 0.5, 0.1, 13.1, "🍍"],
  ["fruit", "Манго", "Mango", "Манго", "Mango", 60, 0.8, 0.4, 15, "🥭"],
  ["fruit", "Лимон", "Limon", "Лимон", "Lemon", 29, 1.1, 0.3, 9.3, "🍋"],
  ["fruit", "Курага", "Quritilgan o'rik", "Қуритилган ўрик", "Dried Apricots", 241, 3.4, 0.5, 62.6, "🍑"],
  ["fruit", "Изюм", "Mayiz", "Майиз", "Raisins", 299, 3.1, 0.5, 79.2, "🍇"],
  ["fruit", "Финики", "Xurmo", "Хурмо", "Dates", 282, 2.5, 0.4, 75, "🌴"],

  ["veg", "Огурец", "Bodring", "Бодринг", "Cucumber", 15, 0.7, 0.1, 3.6, "🥒"],
  ["veg", "Помидор", "Pomidor", "Помидор", "Tomato", 18, 0.9, 0.2, 3.9, "🍅"],
  ["veg", "Картофель отварной", "Qaynatilgan kartoshka", "Қайнатилган картошка", "Boiled Potato", 87, 1.9, 0.1, 20.1, "🥔"],
  ["veg", "Морковь", "Sabzi", "Сабзи", "Carrot", 41, 0.9, 0.2, 9.6, "🥕"],
  ["veg", "Капуста белая", "Oq karam", "Оқ карам", "Cabbage", 25, 1.3, 0.1, 5.8, "🥬"],
  ["veg", "Брокколи", "Brokkoli", "Брокколи", "Broccoli", 34, 2.8, 0.4, 6.6, "🥦"],
  ["veg", "Болгарский перец", "Bolgar qalampiri", "Болгар қалампири", "Bell Pepper", 31, 1, 0.3, 6, "🫑"],
  ["veg", "Лук репчатый", "Piyoz", "Пиёз", "Onion", 40, 1.1, 0.1, 9.3, "🧅"],
  ["veg", "Баклажан", "Baqlajon", "Бақлажон", "Eggplant", 25, 1, 0.2, 5.9, "🍆"],
  ["veg", "Тыква", "Qovoq", "Қовоқ", "Pumpkin", 26, 1, 0.1, 6.5, "🎃"],
  ["veg", "Кукуруза варёная", "Qaynatilgan makkajo'xori", "Қайнатилган маккажўхори", "Boiled Corn", 96, 3.4, 1.5, 21, "🌽"],
  ["veg", "Шпинат", "Ismaloq", "Исмалоқ", "Spinach", 23, 2.9, 0.4, 3.6, "🥬"],
  ["veg", "Овощной салат с маслом", "Sabzavotli salat", "Сабзавотли салат", "Vegetable Salad", 55, 1, 4.5, 3, "🥗"],

  ["meat", "Куриное бедро запечённое", "Pishirilgan tovuq soni", "Пиширилган товуқ сони", "Baked Chicken Thigh", 209, 26, 10.9, 0, "🍗"],
  ["meat", "Индейка (грудка)", "Kurka filesi", "Курка филеси", "Turkey Breast", 135, 30, 1, 0, "🦃"],
  ["meat", "Баранина тушёная", "Dimlangan qo'y go'shti", "Димланган қўй гўшти", "Braised Lamb", 258, 25.6, 16.5, 0, "🍖"],
  ["meat", "Тунец в собственном соку", "Tunets (konserva)", "Тунец (консерва)", "Canned Tuna", 116, 25.5, 0.8, 0, "🐟"],
  ["meat", "Креветки варёные", "Qaynatilgan krevetka", "Қайнатилган креветка", "Boiled Shrimp", 99, 24, 0.3, 0.2, "🦐"],
  ["meat", "Колбаса варёная", "Qaynatilgan kolbasa", "Қайнатилган колбаса", "Boiled Sausage", 257, 12.8, 22.2, 1.5, "🌭"],
  ["meat", "Яичница", "Qovurilgan tuxum", "Қовурилган тухум", "Fried Eggs", 196, 13.6, 14.8, 0.8, "🍳"],

  ["dairy", "Молоко 2,5%", "Sut 2,5%", "Сут 2,5%", "Milk 2.5%", 52, 2.8, 2.5, 4.8, "🥛"],
  ["dairy", "Кефир 2,5%", "Kefir 2,5%", "Кефир 2,5%", "Kefir 2.5%", 53, 2.9, 2.5, 4, "🥛"],
  ["dairy", "Йогурт натуральный", "Tabiiy yogurt", "Табиий йогурт", "Plain Yogurt", 61, 3.5, 3.3, 4.7, "🥛"],
  ["dairy", "Айран", "Ayron", "Айрон", "Ayran", 38, 1.7, 1.5, 4, "🥛"],
  ["dairy", "Сыр твёрдый", "Qattiq pishloq", "Қаттиқ пишлоқ", "Hard Cheese", 356, 25, 27, 0.3, "🧀"],
  ["dairy", "Сметана 20%", "Smetana 20%", "Сметана 20%", "Sour Cream 20%", 206, 2.8, 20, 3.2, "🥄"],
  ["dairy", "Сливочное масло", "Saryog'", "Сариёғ", "Butter", 717, 0.9, 81.1, 0.1, "🧈"],

  ["grain", "Макароны отварные", "Qaynatilgan makaron", "Қайнатилган макарон", "Boiled Pasta", 158, 5.8, 0.9, 30.9, "🍝"],
  ["grain", "Хлеб белый", "Oq non", "Оқ нон", "White Bread", 266, 8.9, 3.3, 50.6, "🍞"],
  ["grain", "Хлеб цельнозерновой", "Butun donli non", "Бутун донли нон", "Whole Grain Bread", 247, 13, 3.4, 41, "🍞"],
  ["grain", "Лепёшка (тандыр-нон)", "Tandir non", "Тандир нон", "Uzbek Flatbread (Non)", 270, 8.5, 1.2, 55, "🫓"],
  ["grain", "Картофель фри", "Fri kartoshka", "Фри картошка", "French Fries", 312, 3.4, 15, 41, "🍟"],
  ["grain", "Нут отварной", "Qaynatilgan no'xat", "Қайнатилган нўхат", "Boiled Chickpeas", 164, 8.9, 2.6, 27.4, "🫘"],
  ["grain", "Чечевица отварная", "Qaynatilgan yasmiq", "Қайнатилган ясмиқ", "Boiled Lentils", 116, 9, 0.4, 20.1, "🫘"],
  ["grain", "Маш отварной", "Qaynatilgan mosh", "Қайнатилган мош", "Boiled Mung Beans", 105, 7, 0.4, 19.2, "🫘"],

  ["dish", "Лагман", "Lag'mon", "Лағмон", "Lagman", 108, 5.2, 4.3, 12.6, "🍜"],
  ["dish", "Шурпа", "Sho'rva", "Шўрва", "Shurpa Soup", 55, 3.5, 3, 3.5, "🍲"],
  ["dish", "Манты", "Manti", "Манти", "Manti", 227, 9.5, 11.5, 21, "🥟"],
  ["dish", "Шашлык из баранины", "Qo'y go'shti shashlik", "Қўй гўшти шашлик", "Lamb Shashlik", 232, 19, 17, 1, "🍢"],
  ["dish", "Шаурма", "Shaurma", "Шаурма", "Shawarma", 215, 11.5, 10.5, 20, "🌯"],
  ["dish", "Пицца", "Pitsa", "Пицца", "Pizza", 266, 11, 10, 33, "🍕"],
  ["dish", "Бургер", "Burger", "Бургер", "Burger", 295, 17, 14, 24, "🍔"],

  ["nuts", "Грецкий орех", "Yong'oq", "Ёнғоқ", "Walnuts", 654, 15.2, 65.2, 13.7, "🌰"],
  ["nuts", "Миндаль", "Bodom", "Бодом", "Almonds", 579, 21.2, 49.9, 21.6, "🌰"],
  ["nuts", "Арахис", "Yer yong'oq", "Ер ёнғоқ", "Peanuts", 567, 25.8, 49.2, 16.1, "🥜"],
  ["nuts", "Фисташки", "Pista", "Писта", "Pistachios", 560, 20.2, 45.3, 27.2, "🥜"],
  ["nuts", "Арахисовая паста", "Yer yong'oq pastasi", "Ер ёнғоқ пастаси", "Peanut Butter", 588, 25, 50, 20, "🥜"],

  ["sweet", "Мёд", "Asal", "Асал", "Honey", 304, 0.3, 0, 82.4, "🍯"],
  ["sweet", "Сахар", "Shakar", "Шакар", "Sugar", 387, 0, 0, 100, "🍬"],
  ["sweet", "Тёмный шоколад", "Qora shokolad", "Қора шоколад", "Dark Chocolate", 546, 4.9, 31.3, 61.2, "🍫"],
  ["sweet", "Молочный шоколад", "Sutli shokolad", "Сутли шоколад", "Milk Chocolate", 535, 7.6, 29.7, 59.4, "🍫"],
  ["sweet", "Печенье", "Pechenye", "Печенье", "Cookies", 450, 6, 18, 68, "🍪"],
  ["sweet", "Мороженое пломбир", "Muzqaymoq", "Музқаймоқ", "Ice Cream", 207, 3.5, 11, 23.6, "🍦"],

  ["other", "Оливковое масло", "Zaytun moyi", "Зайтун мойи", "Olive Oil", 884, 0, 100, 0, "🫒"],
  ["other", "Подсолнечное масло", "Kungaboqar moyi", "Кунгабоқар мойи", "Sunflower Oil", 899, 0, 99.9, 0, "🌻"],
  ["other", "Апельсиновый сок", "Apelsin sharbati", "Апельсин шарбати", "Orange Juice", 45, 0.7, 0.2, 10.4, "🧃"],
  ["other", "Кола", "Kola", "Кола", "Cola", 42, 0, 0, 10.6, "🥤"],
  ["other", "Кофе чёрный", "Qora qahva", "Қора қаҳва", "Black Coffee", 2, 0.1, 0, 0, "☕"],
  ["other", "Зелёный чай без сахара", "Yashil choy", "Яшил чой", "Green Tea", 1, 0, 0, 0.2, "🍵"]
];
foodDatabase.push(...EXTRA_FOODS.map(([cat, ru, uz_lat, uz_cyr, en, kcal, p, f, c, icon], i) => (
  { id: 15 + i, cat, name: { ru, uz_lat, uz_cyr, en }, kcal, p, f, c, icon }
)));

Object.assign(translations.ru, { no_results: "Ничего не найдено. Попробуйте другое название." });
Object.assign(translations.en, { no_results: "Nothing found. Try another name." });
Object.assign(translations.uz_lat, { no_results: "Hech narsa topilmadi. Boshqa nom bilan urinib ko'ring." });
Object.assign(translations.uz_cyr, { no_results: "Ҳеч нарса топилмади. Бошқа ном билан уриниб кўринг." });
ICONS.sun = '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>';
ICONS.moon = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>';


// === СВОЯ ЗАПИСЬ (когда продукта нет в базе или нужно поправить калории вручную) ===
function addCustomMealRecord({ name, kcal, p, f, c }) {
  const n = v => Math.max(0, Math.round((parseFloat(v) || 0) * 10) / 10);
  if (!(kcal > 0)) return;
  const state = getState();
  state.consumed.unshift({
    uid: Date.now() * 1000 + Math.floor(Math.random() * 1000),
    foodId: 0,
    customName: String(name || '').trim().slice(0, 60) || '—',
    customIcon: '✍️',
    grams: 0,
    kcal: n(kcal), p: n(p), f: n(f), c: n(c),
    time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  });
  saveState(state);
}

Object.assign(translations.ru, {
  comp_title: "Состав блюда", add_component: "+ Добавить продукт",
  extras_hint: "Масло, соус и сахар на фото не видны. Добавьте их, если они были в блюде — так счёт будет точнее:",
  custom_title: "Своё значение (если продукта нет в базе или знаете точные цифры):",
  custom_name_ph: "Название", btn_add_short: "Добавить",
  scan_guess: "Предположение — проверьте",
  scan_sub: "Загрузите фото блюда. Сайт предложит вариант, а вы проверите продукт, вес и добавите то, что не видно на фото."
});
Object.assign(translations.en, {
  comp_title: "Meal contents", add_component: "+ Add item",
  extras_hint: "Oil, sauce and sugar can't be seen in a photo. Add them if they were in the meal for an accurate count:",
  custom_title: "Custom entry (if the food isn't in the database or you know the exact numbers):",
  custom_name_ph: "Name", btn_add_short: "Add",
  scan_guess: "Best guess — please check",
  scan_sub: "Upload a meal photo. We suggest a match; you check the food and weight and add what a photo can't show."
});
Object.assign(translations.uz_lat, {
  comp_title: "Taom tarkibi", add_component: "+ Mahsulot qo'shish",
  extras_hint: "Yog', sous va shakar rasmda ko'rinmaydi. Agar taomda bo'lsa, qo'shing — hisob aniqroq bo'ladi:",
  custom_title: "O'z qiymatingiz (bazada yo'q bo'lsa yoki aniq raqamlarni bilsangiz):",
  custom_name_ph: "Nomi", btn_add_short: "Qo'shish",
  scan_guess: "Taxmin — tekshirib ko'ring",
  scan_sub: "Ovqat rasmini yuklang. Sayt variant taklif qiladi, siz mahsulot va vaznni tekshirib, rasmda ko'rinmaydiganini qo'shasiz."
});
Object.assign(translations.uz_cyr, {
  comp_title: "Таом таркиби", add_component: "+ Маҳсулот қўшиш",
  extras_hint: "Ёғ, соус ва шакар расмда кўринмайди. Агар таомда бўлса, қўшинг — ҳисоб аниқроқ бўлади:",
  custom_title: "Ўз қийматингиз (базада йўқ бўлса ёки аниқ рақамларни билсангиз):",
  custom_name_ph: "Номи", btn_add_short: "Қўшиш",
  scan_guess: "Тахмин — текшириб кўринг",
  scan_sub: "Овқат расмини юкланг. Сайт вариант таклиф қилади, сиз маҳсулот ва вазнни текшириб, расмда кўринмайдиганини қўшасиз."
});

Object.assign(translations.ru, { scan_ai: "AI: оценка по фото", ai_ok: "AI определил состав и оценил вес. Вес по фото приблизителен (±20–30%) — проверьте и поправьте.", ai_fail: "AI-сервер недоступен — показан примерный вариант по имени файла. Проверьте вручную." });
Object.assign(translations.en, { scan_ai: "AI estimate from photo", ai_ok: "AI identified the meal and estimated weight. Weight from a photo is approximate (±20–30%) — please check and adjust.", ai_fail: "AI server unavailable — showing a rough guess from the file name. Please check manually." });
Object.assign(translations.uz_lat, { scan_ai: "AI: rasm bo'yicha baho", ai_ok: "AI tarkibni aniqladi va vaznni baholadi. Rasmdan vazn taxminiy (±20–30%) — tekshirib, to'g'rilang.", ai_fail: "AI server ishlamayapti — fayl nomi bo'yicha taxminiy variant ko'rsatildi. Qo'lda tekshiring." });
Object.assign(translations.uz_cyr, { scan_ai: "AI: расм бўйича баҳо", ai_ok: "AI таркибни аниқлади ва вазнни баҳолади. Расмдан вазн тахминий (±20–30%) — текшириб, тўғрилang.".replace('тўғрилang', 'тўғриланг'), ai_fail: "AI сервер ишламаяпти — файл номи бўйича тахминий вариант кўрсатилди. Қўлда текширинг." });
