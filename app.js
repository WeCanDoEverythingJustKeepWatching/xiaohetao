/* =========================================================================
 * 数字教材案例展示 —— 数据在这里改，加一条案例就复制一个对象
 * =========================================================================
 *
 * 每个案例字段说明：
 *   id       唯一标识（随便写，不重复即可）
 *   title    案例标题
 *   category 资源类型（用于顶部筛选：MG动画 / 数字人微课 / VR虚拟仿真）
 *   tags     标签数组，展示用
 *   summary  一句话简介
 *   desc     详情里的段落说明
 *   cover    封面图路径，如 'covers/xxx.jpg'；留空 '' 会自动生成渐变封面
 *   video    视频，支持三种写法（不写则显示"待上传"占位）：
 *             1) 平台外链： { type: 'iframe', url: 'https://v.qq.com/...' }
 *                            腾讯视频点"分享→嵌入代码"取 src；B站同理
 *             2) 自托管文件：{ type: 'mp4',   url: 'videos/xxx.mp4' }
 *             3) 暂未上传：  { type: 'placeholder' }  或 直接不写 video
 *   pinned   true 表示置顶（在「全部」与对应分类中均排在最前）
 * ========================================================================= */

const cases = [
  {
    id: 'mg-01',
    title: '九类支付结算方式辨析 · MG动画',
    category: 'MG动画',
    tags: ['财经', '支付结算'],
    summary: '用 MG 动画还原真实生意场景，把九种支付结算方式讲清楚。',
    cover: 'covers/cover1.jpg',
    video: { type: 'mp4', url: 'videos/video1.mp4' },
    desc: '以鲜果店等日常经营场景切入，用 MG 动画逐一对比现金、支票、银行汇票等九类支付结算方式，让财经类知识从抽象条文变成可见、可类比的操作流程。'
  },
  {
    id: 'mg-02',
    title: '存货发出计价的四种方法 · MG动画',
    category: 'MG动画',
    tags: ['会计', '存货计价'],
    summary: 'MG 动画拆解先进先出、加权平均等四种存货发出计价方法。',
    cover: 'covers/cover2.jpg',
    video: { type: 'mp4', url: 'videos/video2.mp4' },
    desc: '围绕实际成本法下存货发出的四种计价方法，结合奶茶店进货等生活案例做动画演示，把难点公式化繁为简，适合会计课堂导入与巩固。'
  },
  {
    id: 'dh-01',
    title: '医学人文导论 · 数字人微课（熊柱凤）',
    category: '数字人微课',
    tags: ['医学人文', '南昌大学'],
    summary: '南昌大学数字人主讲《医学人文导论》，让人文照亮医路。',
    cover: 'covers/cover5.jpg',
    video: { type: 'mp4', url: 'videos/video5.mp4' },
    desc: '南昌大学《医学人文导论》数字人微课，主讲教师熊柱凤。课程以真实医患、志愿服务等场景切入，在数字人讲解中融入医学伦理与人文关怀，适合医学院人文素养课程导入。'
  },
  {
    id: 'dh-02',
    title: '移动通信系统概述 · 数字人微课（刘裔文）',
    category: '数字人微课',
    tags: ['通信', '移动通信', '上饶师范学院'],
    summary: '上饶师范学院数字人主讲移动通信发展趋势，从 5G 到 6G 系统概览。',
    cover: 'covers/cover6.jpg',
    video: { type: 'mp4', url: 'videos/video6.mp4' },
    desc: '上饶师范学院课程，数字人讲师刘裔文主讲《移动通信系统概述》，梳理移动通信发展历程，展望 5G/6G 技术趋势与万物智联应用场景，适合通信类专业导论与拓展学习。'
  },
  {
    id: 'vr-01',
    title: '【国家一流课程】飞机机身面型三维数字化测量虚拟仿真实验',
    category: 'VR虚拟仿真',
    tags: ['国家一流课程', '航空制造', '精密测量'],
    summary: '国家一流课程：虚拟仿真飞机机身三维数字化测量，掌握精密检测全流程。',
    cover: 'covers/cover-vr-06.jpg',
    video: { type: 'mp4', url: 'videos/vr-06.mp4' },
    pinned: true,
    desc: '国家一流课程。以虚拟仿真还原飞机机身面型三维数字化测量全过程，覆盖采点、建模与误差分析，培养航空装备制造领域的精密检测能力。'
  },
  {
    id: 'vr-02',
    title: '【国家一流课程】跨越时空——井冈山精神虚拟仿真实验',
    category: 'VR虚拟仿真',
    tags: ['国家一流课程', '红色文化', '思政'],
    summary: '国家一流课程：以 VR 重走井冈山，沉浸式感悟跨越时空的井冈山精神。',
    cover: 'covers/cover-vr-07.jpg',
    video: { type: 'mp4', url: 'videos/vr-07.mp4' },
    pinned: true,
    desc: '国家一流课程。通过虚拟现实重走井冈山革命之路，沉浸式还原历史场景，让学员在交互体验中感悟跨越时空的井冈山精神。'
  },
  {
    id: 'vr-03',
    title: '【国家一流课程】乐平古戏台营造技艺与建构认知',
    category: 'VR虚拟仿真',
    tags: ['国家一流课程', '古建', '传统技艺'],
    summary: '国家一流课程：虚拟仿真乐平古戏台营造，认知传统木构建筑技艺。',
    cover: 'covers/cover-vr-08.jpg',
    video: { type: 'mp4', url: 'videos/vr-08.mp4' },
    pinned: true,
    desc: '国家一流课程。以虚拟仿真拆解乐平古戏台的榫卯结构与营造工序，帮助学员建立对传统木构建筑技艺与地域文化的系统认知。'
  }
];

/* ===== 渲染逻辑（一般不用改） ===== */
const grid = document.getElementById('grid');
const filtersEl = document.getElementById('filters');
const emptyEl = document.getElementById('empty');
const searchEl = document.getElementById('search');
const modal = document.getElementById('modal');

document.getElementById('year').textContent = new Date().getFullYear();

// 同类型给同一组基础色，方便客户一眼区分资源类型
const categoryHue = { 'MG动画': 212, '数字人微课': 158, 'VR虚拟仿真': 280 };
function gradientFor(item) {
  const base = categoryHue[item.category] ?? 200;
  let v = 0;
  for (const c of item.id) v = (v * 31 + c.charCodeAt(0)) % 30;
  const h = base + v;
  return `linear-gradient(135deg, hsl(${h} 70% 55%), hsl(${(h + 35) % 360} 65% 42%))`;
}

function cardHTML(item) {
  const cover = item.cover
    ? `<img src="${item.cover}" alt="${item.title}">`
    : `<div class="cover-placeholder" style="background:${gradientFor(item)}">
         <div><div class="ph-subject">${item.category}</div>
         <div class="ph-title">${item.title}</div></div>
       </div>`;
  const hasVideo = item.video && item.video.type !== 'placeholder' && item.video.type !== 'link';
  const play = hasVideo ? '<div class="play-badge">▶</div>' : '';
  const pin = item.pinned ? '<div class="pin-badge">★ 国家一流课程</div>' : '';
  const tags = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  return `<article class="card${item.pinned ? ' pinned' : ''}" data-id="${item.id}">
      <div class="cover">${cover}${play}${pin}</div>
      <div class="card-body">
        <h3 class="card-title">${item.title}</h3>
        <p class="card-summary">${item.summary}</p>
        <div class="card-tags">${tags}</div>
      </div>
    </article>`;
}

function mediaHTML(video) {
  if (!video || video.type === 'placeholder') {
    return `<div class="media-placeholder"><div style="font-size:34px">🎬</div><div>视频待上传</div></div>`;
  }
  if (video.type === 'iframe') {
    return `<iframe src="${video.url}" allow="autoplay; fullscreen" allowfullscreen></iframe>`;
  }
  if (video.type === 'link') {
    return `<div class="media-placeholder"><div style="font-size:34px">🔗</div>
            <div>该产品以链接形式提供</div>
            <a class="visit-btn" href="${video.url}" target="_blank" rel="noopener">访问产品页面 ↗</a></div>`;
  }
  return `<video src="${video.url}" controls autoplay playsinline></video>`;
}

let activeCategory = '全部';

function render() {
  const q = searchEl.value.trim().toLowerCase();
  const list = cases.filter(c => {
    const okCat = activeCategory === '全部' || c.category === activeCategory;
    const hay = [c.title, c.category, c.summary, ...(c.tags || [])].join(' ').toLowerCase();
    return okCat && hay.includes(q);
  });
  // 置顶：pinned 的案例在「全部」与各自分类中均排在最前
  list.sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  grid.innerHTML = list.map(cardHTML).join('');
  emptyEl.hidden = list.length > 0;
}

function renderFilters() {
  const cats = ['全部', ...new Set(cases.map(c => c.category))];
  filtersEl.innerHTML = cats
    .map(s => `<button class="chip${s === activeCategory ? ' active' : ''}" data-cat="${s}">${s}</button>`)
    .join('');
}

function openModal(id) {
  const item = cases.find(c => c.id === id);
  if (!item) return;
  document.getElementById('modalSubject').textContent = item.category;
  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalSummary').textContent = item.summary || '';
  document.getElementById('modalTags').innerHTML = (item.tags || []).map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('modalMeta').textContent = '';
  document.getElementById('modalDesc').textContent = item.desc || '';
  document.getElementById('modalMedia').innerHTML = mediaHTML(item.video);
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.hidden = true;
  document.getElementById('modalMedia').innerHTML = '';
  document.body.style.overflow = '';
}

grid.addEventListener('click', e => {
  const card = e.target.closest('.card');
  if (card) openModal(card.dataset.id);
});
filtersEl.addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  activeCategory = chip.dataset.cat;
  renderFilters();
  render();
});
searchEl.addEventListener('input', render);
modal.addEventListener('click', e => { if (e.target.dataset.close !== undefined) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

renderFilters();
render();
