/**
 * CRM Demo — 假資料層（獨立展示站，無正式後端）
 */
(function (global) {
  let seq = 1000;
  const nid = (p) => `rec_demo_${p}_${++seq}`;

  function todayOffset(days) {
    const d = new Date();
    d.setDate(d.getDate() + days);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  function monthStr(offsetMonths) {
    const d = new Date();
    d.setMonth(d.getMonth() + (offsetMonths || 0));
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  function buildSeed() {
    const c1 = nid('c');
    const c2 = nid('c');
    const c3 = nid('c');
    const c4 = nid('c');
    const c5 = nid('c');
    const c6 = nid('c');
    const o1 = nid('o');
    const o2 = nid('o');
    const q1 = nid('q');
    const q2 = nid('q');
    const q3 = nid('q');
    const q4 = nid('q');
    const q5 = nid('q');
    const q6 = nid('q');
    const i1 = nid('i');
    const i2 = nid('i');
    const i3 = nid('i');
    const i4 = nid('i');
    const i5 = nid('i');
    const i6 = nid('i');
    const i7 = nid('i');
    const i8 = nid('i');
    const j1 = nid('j');
    const j2 = nid('j');
    const j3 = nid('j');
    const j4 = nid('j');

    const contacts = [
      {
        _id: c1, company: '示範科技股份有限公司', name: '王小明', title: '採購經理',
        phone: '0912-345-678', tel: '04-2222-1111', fax: '04-2222-1112',
        email: 'ming.wang@demo-tech.example', vatNo: '12345678',
        address: '台中市西屯區示範路 88 號', invoiceAddr: '台中市西屯區示範路 88 號',
        deliveryAddr: '台中市西屯區工業區 12 路', website: '', notes: '重點客戶，產線升級中',
      },
      {
        _id: c2, company: '展新自動化有限公司', name: '陳美玲', title: '廠長',
        phone: '0988-765-432', tel: '04-2333-4444', fax: '04-2333-4445',
        email: 'mei.chen@zhanxin.example', vatNo: '87654321',
        address: '台中市大里區展新街 15 號', invoiceAddr: '台中市大里區展新街 15 號',
        deliveryAddr: '台中市大里區展新街 15 號', website: '', notes: '',
      },
      {
        _id: c3, company: '北極星精密機械', name: '林志偉', title: '業務窗口',
        phone: '0920-111-222', tel: '', fax: '',
        email: 'zw.lin@polaris.example', vatNo: '55667788',
        address: '彰化縣和美鎮工業路 3 段', invoiceAddr: '', deliveryAddr: '',
        website: '', notes: '對氣壓元件有興趣',
      },
      {
        _id: c4, company: '綠能包裝材料行', name: '黃雅婷', title: '老闆',
        phone: '', tel: '04-2555-6666', fax: '04-2555-6667',
        email: 'yt.huang@greenpack.example', vatNo: '99887766',
        address: '台中市豐原區綠能巷 7 號', invoiceAddr: '台中市豐原區綠能巷 7 號',
        deliveryAddr: '台中市豐原區綠能巷 7 號', website: '', notes: '',
      },
      {
        _id: c5, company: '翔飛電子工業', name: '張家豪', title: '工程師',
        phone: '0933-888-777', tel: '03-5555-1212', fax: '',
        email: 'jh.chang@xiangfei.example', vatNo: '44556677',
        address: '桃園市蘆竹區南崁路 200 號', invoiceAddr: '桃園市蘆竹區南崁路 200 號',
        deliveryAddr: '桃園市蘆竹區南崁路 200 號', website: '', notes: '感測器耗材回頭客',
      },
      {
        _id: c6, company: '晨光模具股份有限公司', name: '吳佩君', title: '採購',
        phone: '0955-222-333', tel: '04-2666-8899', fax: '04-2666-8800',
        email: 'pj.wu@chenguang.example', vatNo: '33445566',
        address: '台中市烏日區中山路一段 66 號', invoiceAddr: '台中市烏日區中山路一段 66 號',
        deliveryAddr: '台中市烏日區中山路一段 66 號', website: '', notes: '詢問導軌交期',
      },
    ];

    const opps = [
      {
        _id: o1, name: '示範科技｜產線自動化升級', contactId: c1, stage: '報價中',
        amount: 480000, date: todayOffset(20), company: contacts[0].company,
        vatNo: contacts[0].vatNo, tags: ['自動化', '氣壓'], notes: 'Demo 商機',
        invoiceAddr: contacts[0].invoiceAddr, deliveryAddr: contacts[0].deliveryAddr,
      },
      {
        _id: o2, name: '翔飛電子｜感測器年度採購', contactId: c5, stage: '成交',
        amount: 96000, date: todayOffset(-12), company: contacts[4].company,
        vatNo: contacts[4].vatNo, tags: ['耗材'], notes: '',
        invoiceAddr: contacts[4].invoiceAddr, deliveryAddr: contacts[4].deliveryAddr,
      },
    ];

    const quotes = [
      {
        _id: q1, id: 'DEMO-0001', oppId: o1, contactId: c1,
        date: todayOffset(-5), deadline: todayOffset(25),
        status: '已送出', payStatus: '未收款', payDate: '', payAmount: 0,
        company: contacts[0].company, contactName: contacts[0].name,
        contactPhone: contacts[0].phone, contactFax: contacts[0].fax, vatNo: contacts[0].vatNo,
        invoiceAddr: contacts[0].invoiceAddr, deliveryAddr: contacts[0].deliveryAddr,
        handler: 'Demo', handlerPhone: '0900-000-000', handlerEmail: 'demo@example.com',
        notes: '含安裝指導', subtotal: 120000, tax: 6000, total: 126000,
        itemIds: [i1, i2],
      },
      {
        _id: q2, id: 'DEMO-0002', oppId: '', contactId: c2,
        date: todayOffset(-18), deadline: todayOffset(12),
        status: '客戶確認', payStatus: '已收款',
        payDate: todayOffset(-3), payAmount: 88200,
        company: contacts[1].company, contactName: contacts[1].name,
        contactPhone: contacts[1].phone, contactFax: contacts[1].fax, vatNo: contacts[1].vatNo,
        invoiceAddr: contacts[1].invoiceAddr, deliveryAddr: contacts[1].deliveryAddr,
        handler: 'Demo', handlerPhone: '0900-000-000', handlerEmail: 'demo@example.com',
        notes: '', subtotal: 84000, tax: 4200, total: 88200,
        itemIds: [i3],
      },
      {
        _id: q3, id: 'DEMO-0003', oppId: '', contactId: c3,
        date: todayOffset(-40), deadline: todayOffset(-10),
        status: '草稿', payStatus: '未收款', payDate: '', payAmount: 0,
        company: contacts[2].company, contactName: contacts[2].name,
        contactPhone: contacts[2].phone, contactFax: '', vatNo: contacts[2].vatNo,
        invoiceAddr: '', deliveryAddr: '',
        handler: 'Demo', handlerPhone: '0900-000-000', handlerEmail: 'demo@example.com',
        notes: '待補規格', subtotal: 35000, tax: 1750, total: 36750,
        itemIds: [i4],
      },
      {
        _id: q4, id: 'DEMO-0004', oppId: '', contactId: c2,
        date: `${monthStr(-1)}-12`, deadline: `${monthStr(-1)}-28`,
        status: '客戶確認', payStatus: '已收款',
        payDate: `${monthStr(-1)}-20`, payAmount: 52500,
        company: contacts[1].company, contactName: contacts[1].name,
        contactPhone: contacts[1].phone, contactFax: contacts[1].fax, vatNo: contacts[1].vatNo,
        invoiceAddr: contacts[1].invoiceAddr, deliveryAddr: contacts[1].deliveryAddr,
        handler: 'Demo', handlerPhone: '0900-000-000', handlerEmail: 'demo@example.com',
        notes: '上月已收款示範', subtotal: 50000, tax: 2500, total: 52500,
        itemIds: [i5],
      },
      {
        _id: q5, id: 'DEMO-0005', oppId: o2, contactId: c5,
        date: todayOffset(-14), deadline: todayOffset(7),
        status: '客戶確認', payStatus: '已收款',
        payDate: todayOffset(-7), payAmount: 50400,
        company: contacts[4].company, contactName: contacts[4].name,
        contactPhone: contacts[4].phone, contactFax: '', vatNo: contacts[4].vatNo,
        invoiceAddr: contacts[4].invoiceAddr, deliveryAddr: contacts[4].deliveryAddr,
        handler: 'Demo', handlerPhone: '0900-000-000', handlerEmail: 'demo@example.com',
        notes: '', subtotal: 48000, tax: 2400, total: 50400,
        itemIds: [i6, i7],
      },
      {
        _id: q6, id: 'DEMO-0006', oppId: '', contactId: c6,
        date: todayOffset(-2), deadline: todayOffset(28),
        status: '已送出', payStatus: '未收款', payDate: '', payAmount: 0,
        company: contacts[5].company, contactName: contacts[5].name,
        contactPhone: contacts[5].phone, contactFax: contacts[5].fax, vatNo: contacts[5].vatNo,
        invoiceAddr: contacts[5].invoiceAddr, deliveryAddr: contacts[5].deliveryAddr,
        handler: 'Demo', handlerPhone: '0900-000-000', handlerEmail: 'demo@example.com',
        notes: '交期約 3 週', subtotal: 72000, tax: 3600, total: 75600,
        itemIds: [i8],
      },
    ];

    const quoteItems = [
      { _id: i1, quoteId: q1, name: '氣壓缸 MCQB50-100', unit: 'PCS', qty: 10, price: 2800, amount: 28000, stock: '現貨' },
      { _id: i2, quoteId: q1, name: '電磁閥 SY5120-5LZD', unit: 'PCS', qty: 20, price: 4600, amount: 92000, stock: '期貨' },
      { _id: i3, quoteId: q2, name: '導軌滑塊 MGN12H', unit: '組', qty: 12, price: 7000, amount: 84000, stock: '現貨' },
      { _id: i4, quoteId: q3, name: '感測器 E2B-M12', unit: 'PCS', qty: 25, price: 1400, amount: 35000, stock: '現貨' },
      { _id: i5, quoteId: q4, name: '接頭快插 PC8-02', unit: '包', qty: 50, price: 1000, amount: 50000, stock: '現貨' },
      { _id: i6, quoteId: q5, name: '光電感測器 E3Z-D61', unit: 'PCS', qty: 30, price: 800, amount: 24000, stock: '現貨' },
      { _id: i7, quoteId: q5, name: '近接開關 TL-Q5MC1', unit: 'PCS', qty: 40, price: 600, amount: 24000, stock: '現貨' },
      { _id: i8, quoteId: q6, name: '線性滑軌 HGH20CA', unit: '組', qty: 8, price: 9000, amount: 72000, stock: '期貨' },
    ];

    const journals = [
      {
        _id: j1, contactId: c1, company: contacts[0].company, contactName: contacts[0].name,
        contactPhone: contacts[0].phone, createdAt: todayOffset(-2), nextVisit: todayOffset(5),
        natures: ['拜訪', '報價說明'], content: '與採購討論產線升級需求，確認報價單 DEMO-0001 品項與交期。',
        nextFocus: '追催客戶內部簽核', status: '進行中', oppId: o1,
      },
      {
        _id: j2, contactId: c2, company: contacts[1].company, contactName: contacts[1].name,
        contactPhone: contacts[1].phone, createdAt: todayOffset(-8), nextVisit: todayOffset(14),
        natures: ['售後'], content: '確認導軌到貨與安裝狀況，客戶表示運作正常。',
        nextFocus: '下季耗材需求', status: '已完成', oppId: '',
      },
      {
        _id: j3, contactId: c5, company: contacts[4].company, contactName: contacts[4].name,
        contactPhone: contacts[4].phone, createdAt: todayOffset(-10), nextVisit: todayOffset(20),
        natures: ['電話追蹤'], content: '年度感測器採購已確認收款，客戶詢問下一季備料節奏。',
        nextFocus: '整理耗材清單給對方', status: '進行中', oppId: o2,
      },
      {
        _id: j4, contactId: c6, company: contacts[5].company, contactName: contacts[5].name,
        contactPhone: contacts[5].phone, createdAt: todayOffset(-1), nextVisit: todayOffset(7),
        natures: ['拜訪', '報價說明'], content: '現場丈量機台空間，送出 DEMO-0006 導軌報價。',
        nextFocus: '等對方確認圖面', status: '待回覆', oppId: '',
      },
    ];

    return {
      contacts, opps, quotes, journals, quoteItems,
      tags: { options: ['自動化', '氣壓', '耗材', '模具'] },
      visitNatures: { options: ['拜訪', '報價說明', '售後', '電話追蹤'] },
      journalStatuses: { options: ['進行中', '已完成', '待回覆'] },
    };
  }

  let store = null;
  function ensureStore() {
    if (!store) store = buildSeed();
    return store;
  }

  function mapContactCreate(fields) {
    return {
      _id: nid('c'),
      company: fields['公司名稱'] || fields['客戶名稱'] || '',
      name: fields['聯絡人姓名'] || fields['聯絡人'] || '',
      title: fields['職稱'] || '',
      phone: fields['手機'] || '',
      tel: fields['電話'] || fields['市話'] || '',
      fax: fields['傳真'] || '',
      email: fields['Email'] || '',
      vatNo: fields['統一編號'] || '',
      address: fields['地址'] || '',
      invoiceAddr: fields['發票地址'] || '',
      deliveryAddr: fields['出貨地址'] || '',
      website: fields['網站'] || '',
      notes: fields['備註'] || '',
    };
  }

  function applyFields(target, fields) {
    const map = {
      '公司名稱': 'company', '客戶名稱': 'company', '聯絡人姓名': 'name',
      '職稱': 'title', '手機': 'phone', '電話': 'tel', '市話': 'tel',
      'Email': 'email', '統一編號': 'vatNo', '客戶統編': 'vatNo', '地址': 'address',
      '發票地址': 'invoiceAddr', '出貨地址': 'deliveryAddr', '網站': 'website', '備註': 'notes',
      '商機名稱': 'name', '階段': 'stage', '預計金額': 'amount',
      '報價單狀態': 'status', '收款狀態': 'payStatus', '承辦人': 'handler',
      '承辦人電話': 'handlerPhone', '承辦人信箱': 'handlerEmail', '客戶電話': 'contactPhone',
      '工作內容': 'content', '下次拜訪重點': 'nextFocus', '狀態': 'status',
      '客戶姓名': 'contactName', '客戶手機': 'contactPhone', '報價單號': 'id',
      '現貨期貨': 'stock',
    };
    Object.keys(fields || {}).forEach((k) => {
      const v = fields[k];
      if (v === undefined) return;
      if (k === '日期' || k === '報價期限' || k === '收款日期' || k === '建立日期' || k === '下次拜訪日期' || k === '預計成交日') {
        const key = k === '報價期限' ? 'deadline' : k === '收款日期' ? 'payDate' : k === '下次拜訪日期' ? 'nextVisit' : k === '建立日期' ? 'createdAt' : 'date';
        if (typeof v === 'number') {
          const d = new Date(v);
          target[key] = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        } else if (v === '' || v == null) {
          target[key] = '';
        } else {
          target[key] = v;
        }
        return;
      }
      if (k === '收款金額' || k === '合計' || k === '營業稅' || k === '總計' || k === '數量' || k === '單價' || k === '金額') {
        const key = ({ '收款金額': 'payAmount', '合計': 'subtotal', '營業稅': 'tax', '總計': 'total', '數量': 'qty', '單價': 'price', '金額': 'amount' })[k];
        target[key] = Number(v) || 0;
        return;
      }
      if ((k === '商機' || k === '聯繫人' || k === '聯絡人' || k === '名片' || k === '客戶') && Array.isArray(v)) {
        if (k === '商機') target.oppId = v[0] || '';
        else target.contactId = v[0] || '';
        return;
      }
      if (k === '聯絡人' && typeof v === 'string') { target.contactName = v; return; }
      if (k === '報價單' && Array.isArray(v)) { target.quoteId = v[0] || ''; return; }
      if (k === '拜訪性質') { target.natures = Array.isArray(v) ? v : [v].filter(Boolean); return; }
      if (k === '標籤') { target.tags = Array.isArray(v) ? v : [v].filter(Boolean); return; }
      if (k === '品名/規格' || k === '品名') { target.name = v; return; }
      if (k === '單位') { target.unit = v; return; }
      if (k === '傳真') { target.contactFax = v; if ('fax' in target) target.fax = v; return; }
      if (map[k]) target[map[k]] = v;
    });
    return target;
  }

  async function demoFetch(resource) {
    const s = ensureStore();
    await new Promise((r) => setTimeout(r, 80));
    if (resource === 'bootstrap') {
      return { contacts: s.contacts, opps: s.opps, quotes: s.quotes, journals: s.journals };
    }
    if (resource === 'contacts') return s.contacts;
    if (resource === 'opps') return s.opps;
    if (resource === 'quotes') return s.quotes;
    if (resource === 'journals') return s.journals;
    if (resource === 'quoteItems') return s.quoteItems;
    if (resource === 'tags') return { ...s.tags };
    if (resource === 'visitNatures') return { ...s.visitNatures };
    if (resource === 'journalStatuses') return { ...s.journalStatuses };
    throw new Error('Unknown demo resource: ' + resource);
  }

  async function demoPost(resource, action, body = {}) {
    const s = ensureStore();
    await new Promise((r) => setTimeout(r, 60));
    const { fields, recordId, tag } = body;

    if (resource === 'tags' && action === 'add') {
      if (tag && !s.tags.options.includes(tag)) s.tags.options.push(tag);
      return { options: s.tags.options };
    }
    if (resource === 'tags' && action === 'remove') {
      s.tags.options = s.tags.options.filter((x) => x !== tag);
      return { options: s.tags.options, removed: true };
    }
    if (resource === 'visitNatures' && action === 'add') {
      if (tag && !s.visitNatures.options.includes(tag)) s.visitNatures.options.push(tag);
      return { options: s.visitNatures.options };
    }
    if (resource === 'visitNatures' && action === 'remove') {
      s.visitNatures.options = s.visitNatures.options.filter((x) => x !== tag);
      return { options: s.visitNatures.options, removed: true };
    }
    if (resource === 'journalStatuses' && action === 'add') {
      if (tag && !s.journalStatuses.options.includes(tag)) s.journalStatuses.options.push(tag);
      return { options: s.journalStatuses.options };
    }
    if (resource === 'journalStatuses' && action === 'remove') {
      s.journalStatuses.options = s.journalStatuses.options.filter((x) => x !== tag);
      return { options: s.journalStatuses.options, removed: true };
    }

    if (resource === 'quoteItems' && action === 'batchSync') {
      const creates = Array.isArray(body.creates) ? body.creates : [];
      const updates = Array.isArray(body.updates) ? body.updates : [];
      const deletes = Array.isArray(body.deletes) ? body.deletes : [];
      const created = creates.map((x) => {
        const item = applyFields({ _id: nid('i'), unit: 'PCS', qty: 1, price: 0, amount: 0 }, x.fields || x);
        item.amount = item.amount || (item.qty * item.price);
        s.quoteItems.push(item);
        return item;
      });
      const updated = updates.map((u) => {
        const it = s.quoteItems.find((x) => x._id === u.recordId);
        if (it) applyFields(it, u.fields || {});
        if (it) it.amount = it.amount || (it.qty * it.price);
        return it || { _id: u.recordId };
      });
      s.quoteItems = s.quoteItems.filter((x) => !deletes.includes(x._id));
      return { created, updated };
    }

    const listKey = { contacts: 'contacts', opps: 'opps', quotes: 'quotes', journals: 'journals', quoteItems: 'quoteItems' }[resource];
    if (!listKey) throw new Error('Unknown demo resource: ' + resource);

    if (action === 'create') {
      let row;
      if (resource === 'contacts') row = mapContactCreate(fields || {});
      else if (resource === 'quoteItems') {
        row = applyFields({ _id: nid('i'), unit: 'PCS', qty: 1, price: 0, amount: 0 }, fields || {});
        row.amount = row.amount || (row.qty * row.price);
      } else if (resource === 'quotes') {
        const n = s.quotes.length + 1;
        row = applyFields({
          _id: nid('q'), id: `DEMO-${String(n).padStart(4, '0')}`,
          status: '草稿', payStatus: '未收款',
          handler: '', handlerPhone: '', handlerEmail: '', itemIds: [],
          company: '', contactName: '', contactPhone: '', contactFax: '',
          vatNo: '', invoiceAddr: '', deliveryAddr: '', notes: '',
          subtotal: 0, tax: 0, total: 0, oppId: '', contactId: '',
        }, fields || {});
      } else if (resource === 'journals') {
        row = applyFields({
          _id: nid('j'), natures: [], content: '', status: '進行中',
          createdAt: todayOffset(0), company: '', contactName: '', contactPhone: '',
          nextFocus: '', nextVisit: '', oppId: '', contactId: '',
        }, fields || {});
      } else {
        row = applyFields({ _id: nid('o'), stage: '報價中', amount: 0, tags: [] }, fields || {});
      }
      s[listKey].unshift(row);
      return row;
    }

    if (action === 'update') {
      const row = s[listKey].find((x) => x._id === recordId);
      if (!row) throw new Error('找不到資料');
      applyFields(row, fields || {});
      if (resource === 'quoteItems') row.amount = row.amount || (row.qty * row.price);
      return row;
    }

    if (action === 'delete') {
      s[listKey] = s[listKey].filter((x) => x._id !== recordId);
      if (resource === 'quotes') {
        s.quoteItems = s.quoteItems.filter((x) => x.quoteId !== recordId);
      }
      return { ok: true };
    }

    throw new Error('Unknown demo action: ' + action);
  }

  function updateBanner(canEdit) {
    let el = document.getElementById('demo-banner');
    if (!el) {
      el = document.createElement('div');
      el.id = 'demo-banner';
      document.body.appendChild(el);
    }
    if (canEdit) {
      el.classList.add('edit-on');
      el.innerHTML = '編輯模式已解鎖 · 可新增／修改／刪除假資料　<button type="button" id="demo-lock-btn">回到預覽</button>';
    } else {
      el.classList.remove('edit-on');
      el.innerHTML = '預覽模式 · 假資料僅供瀏覽　<button type="button" id="demo-unlock-btn">管理員解鎖</button>';
    }
    el.style.display = 'block';
    document.body.classList.add('demo-mode');
    document.getElementById('demo-unlock-btn')?.addEventListener('click', () => {
      if (typeof global.openUnlockModal === 'function') global.openUnlockModal();
    });
    document.getElementById('demo-lock-btn')?.addEventListener('click', () => {
      if (typeof global.lockToPreview === 'function') global.lockToPreview();
    });
  }

  function showBanner(canEdit) {
    updateBanner(!!canEdit);
  }

  function resetStore() { store = buildSeed(); }

  global.GkCrmDemo = {
    ensureStore, resetStore, demoFetch, demoPost, showBanner, updateBanner,
  };
})(window);
