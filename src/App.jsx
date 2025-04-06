import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [modalTarget, setModalTarget] = useState(null);

  const coinBagImages = [
    { src: "/images/coin-bag-1.jpg", alt: "10元硬幣袋" },
    { src: "/images/coin-bag-2.jpg", alt: "1元硬幣袋" },
    { src: "/images/coin-bag-3.jpg", alt: "50元硬幣袋" },
    { src: "/images/coin-bag-4.jpg", alt: "5元硬幣袋" },
    { src: "/images/coin-bag-5.jpg", alt: "空白硬幣袋" },
  ];

  const riceBagImages = [
    { src: "/images/rice-1.jpg", alt: "空白硬幣外袋" },
    { src: "/images/rice-2.jpg", alt: "10元硬幣外袋" },
    { src: "/images/rice-3.jpg", alt: "1元硬幣外袋" },
    { src: "/images/rice-4.jpg", alt: "5元硬幣外袋" },
    { src: "/images/rice-5.jpg", alt: "50元硬幣外袋" },
  ];

  const paperBagImages = [
    { src: "/images/paper-1.jpg", alt: "10元硬幣布條" },
    { src: "/images/paper-2.jpg", alt: "1元硬幣布條" },
    { src: "/images/paper-3.jpg", alt: "5元硬幣布條" },
    { src: "/images/paper-4.jpg", alt: "50元硬幣布條" },
  ];

  const sealBagImages = [
    { src: "/images/121373.jpg", alt: "硬幣外袋封簽，可客製貴公司名稱，4種幣別均有製作。" },
  ];

  const drawstringBagImages = [
    { src: "/images/bag-1.jpg", alt: "大型68x105" },
    { src: "/images/bag-2.jpg", alt: "中型60x90" },
    { src: "/images/bag-3.jpg", alt: "小型50x70" },
    { src: "/images/bag-4.jpg", alt: "大、中、小均有五色可選擇" },
    { src: "/images/bag-5.jpg", alt: "加長型50x90" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 scroll-smooth">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/images/logo-yellow.png"
              alt="北地企業社 logo"
              className="h-14 w-auto"
              loading="lazy"
            />
            <span className="text-2xl font-extrabold text-gray-900">北地企業社</span>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-blue-600">首頁</a>
            <a href="#products" className="hover:text-blue-600">產品介紹</a>
            <a href="#about" className="hover:text-blue-600">關於我們</a>
            <a href="#contact" className="hover:text-blue-600">聯絡我們</a>
          </div>
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2">
            <a href="#home" className="block hover:text-blue-600">首頁</a>
            <a href="#products" className="block hover:text-blue-600">產品介紹</a>
            <a href="#about" className="block hover:text-blue-600">關於我們</a>
            <a href="#contact" className="block hover:text-blue-600">聯絡我們</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="p-8 bg-blue-200 text-center">
        <h2 className="text-3xl font-bold mb-4">零錢袋、麻布袋、麵粉袋、各式米袋專賣</h2>
        <p className="text-lg">台灣製造、品質保證、專業客製，值得信賴</p>
      </section>

      {/* Products */}
      <section id="products" className="p-8">
        <h3 className="text-2xl font-semibold mb-6">本公司產品</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* 每一個產品卡片都使用相同樣式 */}
          {[
            {
              title: "零錢布袋",
              images: coinBagImages,
              target: "coin",
              desc: "送交銀行專用，可區分幣別，品質堅固耐用。",
            },
            {
              title: "硬幣外袋",
              images: riceBagImages,
              target: "rice",
              desc: "將硬幣集中封裝使用，可依客戶名稱客製。",
            },
            {
              title: "硬幣外袋布條",
              images: paperBagImages,
              target: "paper",
              desc: "送交銀行專用，於硬幣外套梱綁一起使用。",
            },
            {
              title: "封條布袋",
              images: sealBagImages,
              target: "seal",
              desc: "封裝銀行外袋使用。",
            },
            {
              title: "束口袋",
              images: drawstringBagImages,
              target: "drawstring",
              desc: "PP材質，大（68×105）中（60×90）小（50×70）加長（50×90），適合傳統產業裝袋使用，台灣製造品質保證。",
            },
          ].map((product, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h4 className="font-bold mb-2">{product.title}（可點開圖片參考樣式）</h4>
              <div className="grid grid-cols-2 gap-2 mb-2">
                {product.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-32 object-cover rounded cursor-pointer"
                    onClick={() => {
                      setModalTarget(product.target);
                      setCurrentIndex(i);
                    }}
                  />
                ))}
              </div>
              <p className="text-base">{product.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-8 bg-white">
        <h3 className="text-2xl font-semibold mb-4 text-center">關於我們</h3>
        <div className="max-w-3xl mx-auto text-center text-gray-700">
          <p className="mb-4">
            北地企業社創立於台灣，秉持著「誠信、專業、效率」的經營理念，致力於提供高品質的產品與服務，
            協助企業與個人客戶實現理想與價值。
          </p>
          <p className="mb-4">
            產品均可以印刷客製、專業製造，
            以用心、積極的態度面對每一位客戶的需求。
          </p>
          <p>北地企業社不只賣產品，更在意您背後的信任與期待。</p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="p-8 bg-gray-100 text-center">
        <h3 className="text-3xl font-bold mb-6">聯絡我們</h3>
        <p className="mb-4 text-base">歡迎透過以下方式與我們聯絡，了解更多產品資訊或合作細節。</p>
        <div className="text-left max-w-md mx-auto text-gray-700 text-lg space-y-2 mb-8 leading-relaxed">
          <p><strong>公司名稱：</strong>北地企業社</p>
          <p><strong>統一編號：</strong>87411753</p>
          <p><strong>聯絡電話：</strong> <a href="tel:033838632" className="text-blue-600 hover:underline">03-3838-632</a></p>
          <p><strong>傳真電話：</strong>03-383-2510</p>
          <p><strong>公司地址：</strong>337桃園市大園區中央路361巷230弄68號</p>
          <p>
            <strong>Email：</strong>
            <a href="mailto:to520323520@gmail.com" className="text-blue-600 hover:underline">to520323520@gmail.com</a><br />
            <span className="text-sm text-gray-500">(詢價請寄 email 給我們)</span>
          </p>
        </div>
        <a href="https://line.me/R/ti/p/@nl68" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-500 text-white text-lg px-8 py-3 rounded hover:bg-green-600">
          加入我們的 LINE
        </a>
        <div className="mt-8 flex justify-center">
          <img src="/images/line-qr.jpg" alt="LINE QR Code" className="w-44 h-44" loading="lazy" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-8">
        <p className="text-sm">&copy; 2025 北地企業社. 版權所有.</p>
      </footer>

      {/* Modal 彈窗 */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50" onClick={() => setCurrentIndex(null)}>
          <div className="bg-white p-4 rounded shadow-lg max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end">
              <button onClick={() => setCurrentIndex(null)} className="text-gray-500 hover:text-gray-800 text-3xl font-bold">&times;</button>
            </div>
            <img
              src={
                modalTarget === "rice" ? riceBagImages[currentIndex].src :
                modalTarget === "paper" ? paperBagImages[currentIndex].src :
                modalTarget === "seal" ? sealBagImages[currentIndex].src :
                modalTarget === "drawstring" ? drawstringBagImages[currentIndex].src :
                coinBagImages[currentIndex].src
              }
              alt={
                modalTarget === "rice" ? riceBagImages[currentIndex].alt :
                modalTarget === "paper" ? paperBagImages[currentIndex].alt :
                modalTarget === "seal" ? sealBagImages[currentIndex].alt :
                modalTarget === "drawstring" ? drawstringBagImages[currentIndex].alt :
                coinBagImages[currentIndex].alt
              }
              className="w-full max-w-[800px] h-auto mb-4 rounded shadow-lg"
              loading="lazy"
            />
            <p className="text-base text-center text-gray-800 font-medium mb-4">
              {
                modalTarget === "rice" ? riceBagImages[currentIndex].alt :
                modalTarget === "paper" ? paperBagImages[currentIndex].alt :
                modalTarget === "seal" ? sealBagImages[currentIndex].alt :
                modalTarget === "drawstring" ? drawstringBagImages[currentIndex].alt :
                coinBagImages[currentIndex].alt
              }
            </p>
            <div className="flex justify-between">
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50" onClick={() => setCurrentIndex(currentIndex - 1)} disabled={currentIndex === 0}>
                ◀ 上一張
              </button>
              <button className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50" onClick={() => setCurrentIndex(currentIndex + 1)} disabled={
                modalTarget === "rice" ? currentIndex === riceBagImages.length - 1 :
                modalTarget === "paper" ? currentIndex === paperBagImages.length - 1 :
                modalTarget === "seal" ? currentIndex === sealBagImages.length - 1 :
                modalTarget === "drawstring" ? currentIndex === drawstringBagImages.length - 1 :
                currentIndex === coinBagImages.length - 1
              }>
                下一張 ▶
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
