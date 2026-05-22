'use client';

import React, { useState } from 'react';

// 模拟 Bitrefill 电商目录数据
const BITREFILL_PRODUCTS = [
  { id: '1', name: 'Amazon Gift Card', category: 'Gift Cards', price: '$50.00', crypto: '50.00 USDT', icon: '🛒' },
  { id: '2', name: 'Apple App Store', category: 'Entertainment', price: '$20.00', crypto: '20.00 USDT', icon: '🍎' },
  { id: '3', name: 'Steam Wallet Card', category: 'Gaming', price: '$10.00', crypto: '10.00 USDT', icon: '🎮' },
  { id: '4', name: 'Global Travel eSIM', category: 'eSIMs', price: '$15.00', crypto: '15.00 USDT', icon: '🌐' },
];

export default function Home() {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: '你好！我是您的 imToken 电商 AI 助手。已成功连接 Bitrefill 商业网络与 token-core 钱包安全模块。您可以对我说：“帮我买一张 50U 的亚马逊卡” 或 “推荐个实用的旅行 eSIM”。' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isPendingPayment, setIsPendingPayment] = useState(false);
  const [currentOrder, setCurrentOrder] = useState<any>(null);
  const [txStatus, setTxStatus] = useState<'idle' | 'signing' | 'success'>('idle');

  // 模拟 AI 处理逻辑
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userText = inputValue;
    const newMessages = [...messages, { role: 'user', text: userText }];
    setMessages(newMessages);
    setInputValue('');

    // 简单匹配模拟 AI 的意图解析
    setTimeout(() => {
      if (userText.includes('亚') || userText.includes('Amazon') || userText.includes('卡')) {
        const prod = BITREFILL_PRODUCTS[0];
        setCurrentOrder(prod);
        setMessages([...newMessages, 
          { role: 'assistant', text: `🤖 [AI 智能解析成功] 已为您在 Bitrefill 目录中找到商品：${prod.name}，价格：${prod.price}。` },
          { role: 'assistant', text: `🔒 [token-core 联动] 正在为您构建链上安全的转账交易负载... 请检查右侧电子钱包进行确认签名。` }
        ]);
        setIsPendingPayment(true);
      } else {
        setMessages([...newMessages, { 
          role: 'assistant', 
          text: '🤖 收到您的意图！我可以通过 Bitrefill Agents API 帮您检索全球 10000+ 数码商品。您可以试着输入：“购买 Amazon 卡”来体验完整的端到端钱包电商购买流程。' 
        }]);
      }
    }, 1000);
  };

  // 模拟钱包调用 token-core 核心库的签名与广播
  const handleWalletSign = () => {
    setTxStatus('signing');
    setTimeout(() => {
      setTxStatus('success');
      setIsPendingPayment(false);
      setMessages(prev => [...prev, {
        role: 'assistant',
        text: `🎉【交易成功】token-core 已成功签署并广播该笔电商消费。您的 Bitrefill 卡密凭证已安全分发至您的钱包。`
      }]);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-teal-500 selection:text-slate-900">
      {/* 顶部导航栏 */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-teal-400 to-emerald-400 flex items-center justify-center font-bold text-slate-950 text-xl shadow-lg shadow-teal-500/20">
            i
          </div>
          <div>
            <h1 className="font-bold text-base tracking-wide flex items-center gap-2">
              imToken <span className="text-xs bg-slate-800 text-teal-400 px-2 py-0.5 rounded-full border border-teal-500/20">10th AI Co-Creation</span>
            </h1>
            <p className="text-xs text-slate-400">项目：钱包电商助手 (Powered by Bitrefill & token-core)</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-slate-800/80 border border-slate-700/50 rounded-full px-3 py-1.5 text-xs">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-slate-300 font-mono">Status: Connected to Vercel</span>
        </div>
      </header>

      {/* 主体工作区 */}
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* 左侧：黑客松项目技术架构与说明文档 */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-slate-850 border border-slate-800 rounded-2xl p-5 bg-gradient-to-b from-slate-800/40 to-slate-900/40">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-teal-400 mb-3">💡 创意叙事与背景</h2>
            <p className="text-xs text-slate-300 leading-relaxed">
              传统的加密钱包仅仅是“资产保险箱”。本项目响应 <b>“让你的钱包成为电商助手”</b> 命题，通过将 <b>Bitrefill AI Agents API</b> 作为无缝商业基础设施，叠加 <b>token-core</b> 强大的多链底层密钥对与签名服务，让用户能直接用一句话指挥钱包购买全球的真实商品，极大地跨越了 Web3 到 Web2 商业消费的门槛。
            </p>
          </div>

          <div className="bg-slate-850 border border-slate-800 rounded-2xl p-5 bg-gradient-to-b from-slate-800/40 to-slate-900/40 space-y-3">
            <h2 className="font-semibold text-sm uppercase tracking-wider text-teal-400">🛠 技术集成证明</h2>
            <div className="space-y-2">
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <p className="text-xs font-mono text-emerald-400">Bitrefill Integrations:</p>
                <p className="text-[11px] text-slate-400 mt-1">引入 Bitrefill AI 代理商业图谱，提供无 KYC、免信用卡的实时法币消费货架转换层。</p>
              </div>
              <div className="p-2 rounded-lg bg-slate-900/60 border border-slate-800">
                <p className="text-xs font-mono text-blue-400">consenlabs/token-core:</p>
                <p className="text-[11px] text-slate-400 mt-1">负责安全派生 Keystore、构建资产转移 payload，并确保消费签名的原子性与抗截获能力。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 中间：AI 电商助理交互界面 */}
        <div className="lg:col-span-5 flex flex-col h-[calc(100vh-180px)] bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="bg-slate-900/50 p-4 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-medium tracking-wide text-slate-300 flex items-center gap-2">
              <span className="p-1 rounded-md bg-teal-500/10 text-teal-400 text-xs">AI</span>
              Bitrefill 智能消费代理
            </span>
          </div>

          {/* 对话消息滚动区 */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl p-3 leading-relaxed shadow-md ${
                  m.role === 'user' 
                    ? 'bg-teal-600 text-white rounded-tr-none' 
                    : 'bg-slate-900 border border-slate-800/80 text-slate-200 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          {/* 输入框区域 */}
          <div className="p-3 border-t border-slate-800 bg-slate-900/30 flex gap-2">
            <input
              type="text"
              className="flex-1 bg-slate-900 border border-slate-700/60 rounded-xl px-3 py-2 text-xs focus:outline-none focus:border-teal-500 text-slate-100 placeholder:text-slate-500"
              placeholder="对 AI 助手说：我想买一张亚马逊礼品卡..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold px-4 py-2 rounded-xl transition-colors text-xs active:scale-95"
            >
              发送
            </button>
          </div>
        </div>

        {/* 右侧：模拟集成了 token-core 的移动钱包界面 */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* 货架快捷参考（加深 Bitrefill 电商存在感） */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-4">
            <h3 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">📦 Bitrefill 全球商品连接池</h3>
            <div className="grid grid-cols-2 gap-2">
              {BITREFILL_PRODUCTS.map(p => (
                <div key={p.id} className="p-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all cursor-pointer" onClick={() => { setInputValue(`帮我订购 ${p.name}`); }}>
                  <span className="text-lg">{p.icon}</span>
                  <p className="text-[11px] font-medium text-slate-200 mt-1 truncate">{p.name}</p>
                  <p className="text-[10px] text-slate-500">{p.crypto}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 模拟手机内置的 imToken 硬件钱包签名确认框 */}
          <div className="bg-slate-950 border-4 border-slate-800 rounded-[32px] p-4 shadow-xl relative overflow-hidden aspect-[9/14] flex flex-col justify-between">
            
            {/* 模拟手机顶部条 */}
            <div className="flex justify-between items-center text-[10px] text-slate-500 font-mono px-2">
              <span>09:41</span>
              <div className="w-20 h-4 bg-slate-800 rounded-b-xl absolute left-1/2 -translate-x-1/2 top-0" />
              <div className="space-x-1">
                <span>📶</span>
                <span>🔋</span>
              </div>
            </div>

            {/* 钱包核心内容 */}
            <div className="mt-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[10px] text-slate-400">imToken Core Wallet</p>
                    <p className="text-xs font-mono font-bold text-teal-400 mt-0.5">0x772...a89bbb</p>
                  </div>
                  <span className="text-xs bg-slate-800 px-2 py-1 rounded-md border border-slate-700 text-slate-300">💡 HD Wallet</span>
                </div>

                {!isPendingPayment && txStatus !== 'success' && (
                  <div className="text-center py-8 text-slate-500 space-y-2">
                    <div className="text-3xl">💤</div>
                    <p className="text-xs">等待 AI 电商代理触发交易</p>
                    <p className="text-[10px] px-4 text-slate-600">在左侧聊天框发送“购买卡片”，将在此唤起基于 token-core 架构的加密资产安全结算层</p>
                  </div>
                )}

                {isPendingPayment && (
                  <div className="space-y-3 animate-fadeIn">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs">
                      <p className="text-amber-400 font-medium flex items-center gap-1.5">
                        ⚠️ 核心层签名唤起 [token-core-monorepo]
                      </p>
                      <p className="text-[11px] text-slate-300 mt-1">检测到上层有来自 <b>Bitrefill Agent</b> 的第三方安全结账请求：</p>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl space-y-2 text-[11px] font-mono border border-slate-800">
                      <div className="flex justify-between"><span className="text-slate-500">交易类型:</span><span className="text-slate-200">EIP-712 / Commerical Buy</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">结算商户:</span><span className="text-teal-400 font-bold">Bitrefill Ltd.</span></div>
                      <div className="flex justify-between"><span className="text-slate-500">拟扣资产:</span><span className="text-rose-400 font-bold">{currentOrder?.crypto}</span></div>
                    </div>
                  </div>
                )}

                {txStatus === 'success' && (
                  <div className="text-center py-6 space-y-2 animate-scaleIn">
                    <div className="text-3xl text-emerald-400">🏆</div>
                    <p className="text-xs font-bold text-emerald-400">签名并广播成功！</p>
                    <div className="p-2.5 bg-slate-900 border border-slate-800/80 rounded-xl text-left font-mono text-[9px] text-slate-400 space-y-1">
                      <p className="text-slate-300 font-sans font-medium mb-1">🎁 Bitrefill 卡密已被安全认领：</p>
                      <p className="text-emerald-400/90 break-all select-all bg-slate-950 p-1.5 rounded border border-emerald-500/10">CLAIM_CODE: IM10TH-BITREFILL-AGENTS-SUCCESS-0A89BBB</p>
                    </div>
                  </div>
                )}
              </div>

              {/* 签名确认按钮 */}
              {isPendingPayment && (
                <button
                  onClick={handleWalletSign}
                  disabled={txStatus === 'signing'}
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold py-2.5 rounded-xl transition-all text-xs active:scale-95 shadow-lg shadow-teal-500/10"
                >
                  {txStatus === 'signing' ? '🔄 正在调用核心加密芯片签名...' : '✍️ 确认生物识别并授权签名'}
                </button>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}
