const appData = {
  topics: [
    {
      title: "基礎介紹",
      points: [
        {
          title: "量子電腦是什麼？",
          description: "量子電腦利用量子位元進行計算，能在某些問題上展現超越傳統電腦的效能。",
          imageUrl: "",
          quiz: {
            question: "量子電腦使用什麼單位做為運算基礎？",
            options: [
              { text: "A. 位元(bit)", explanation: "位元是傳統電腦的運算單位。", isCorrect: false },
              { text: "B. 量子位元(qubit)", explanation: "正確，量子電腦的基本運算單位是量子位元。", isCorrect: true },
              { text: "C. 邏輯閘(gate)", explanation: "邏輯閘是操作量子位元的方式，而非單位。", isCorrect: false },
              { text: "D. 影像像素(pixel)", explanation: "像素與量子運算無直接關聯。", isCorrect: false }
            ]
          }
        },
        {
          title: "量子疊加原理",
          description: "量子位元可同時處於0與1的疊加狀態，使得平行運算成為可能。",
          imageUrl: "",
          quiz: {
            question: "疊加狀態能帶來何種效益？",
            options: [
              { text: "A. 增加計算平行性", explanation: "疊加讓量子電腦能同時探索多種可能性。", isCorrect: true },
              { text: "B. 減少能量消耗", explanation: "主要優勢並非能耗，而是運算方式。", isCorrect: false },
              { text: "C. 強化圖形處理", explanation: "此與量子疊加無直接關聯。", isCorrect: false },
              { text: "D. 降低成本", explanation: "量子電腦仍處於昂貴的實驗階段。", isCorrect: false }
            ]
          }
        }
      ]
    },
    {
      title: "關鍵名詞",
      points: [
        {
          title: "量子糾纏",
          description: "兩個量子位元的狀態可能以不可分割的方式關聯，稱為量子糾纏。",
          imageUrl: "",
          quiz: {
            question: "量子糾纏有何特色？",
            options: [
              { text: "A. 可瞬間傳遞訊息", explanation: "糾纏本身並不違反相對論，訊息仍受光速限制。", isCorrect: false },
              { text: "B. 使測量結果相關", explanation: "糾纏量子位元被觀測時，狀態會同時決定。", isCorrect: true },
              { text: "C. 提升電腦時脈", explanation: "糾纏與時脈速度無關。", isCorrect: false },
              { text: "D. 只存在理論上", explanation: "糾纏已在實驗中被證實存在。", isCorrect: false }
            ]
          }
        },
        {
          title: "量子閘",
          description: "量子閘是對量子位元進行操作的基本電路，例如Hadamard或CNOT閘。",
          imageUrl: "",
          quiz: {
            question: "以下何者是常見的量子閘？",
            options: [
              { text: "A. AND閘", explanation: "AND閘屬於經典邏輯閘。", isCorrect: false },
              { text: "B. Hadamard閘", explanation: "正確，Hadamard閘可將量子位元置於疊加。", isCorrect: true },
              { text: "C. NOR閘", explanation: "NOR閘是傳統邏輯閘。", isCorrect: false },
              { text: "D. XOR閘", explanation: "XOR也是經典邏輯閘。", isCorrect: false }
            ]
          }
        }
      ]
    },
    {
      title: "原理比較",
      points: [
        {
          title: "量子與傳統電腦的差異",
          description: "量子電腦利用量子疊加與糾纏，大幅提升某些運算效能，而傳統電腦以位元逐步運算。",
          imageUrl: "",
          quiz: {
            question: "量子電腦與傳統電腦相比，最大潛在優勢為何？",
            options: [
              { text: "A. 全面取代傳統電腦", explanation: "量子電腦目前適合特定領域，仍無法全面取代。", isCorrect: false },
              { text: "B. 处理大型資料庫", explanation: "量子優勢主要在於解決特定問題，如優化與模擬。", isCorrect: false },
              { text: "C. 提供部分問題的指數級加速", explanation: "正確，某些演算法在量子電腦上可獲得指數加速。", isCorrect: true },
              { text: "D. 節省電量", explanation: "能耗優勢並非主要特色。", isCorrect: false }
            ]
          }
        },
        {
          title: "量子與傳統加密比較",
          description: "量子運算對傳統加密方式帶來潛在威脅，也促進量子安全加密研究。",
          imageUrl: "",
          quiz: {
            question: "哪種加密演算法可能被量子電腦破解？",
            options: [
              { text: "A. RSA", explanation: "正確，Shor演算法可在量子電腦上快速分解大質數。", isCorrect: true },
              { text: "B. 一次性密碼本", explanation: "一次性密碼本在理論上安全，量子電腦也難破解。", isCorrect: false },
              { text: "C. 雜湊函式", explanation: "雜湊運算仍需大量資源，量子電腦主要威脅在分解與離散對數。", isCorrect: false },
              { text: "D. 古典密碼機", explanation: "與量子運算無直接關聯。", isCorrect: false }
            ]
          }
        }
      ]
    },
    {
      title: "應用實例",
      points: [
        {
          title: "量子模擬化學反應",
          description: "量子電腦可模擬分子與化學反應，對新藥與材料研發具有潛力。",
          imageUrl: "",
          quiz: {
            question: "為何量子電腦適合模擬分子？",
            options: [
              { text: "A. 分子本質具量子特性", explanation: "正確，量子電腦自然適合處理量子尺度的問題。", isCorrect: true },
              { text: "B. 因為更便宜", explanation: "目前量子電腦仍相當昂貴。", isCorrect: false },
              { text: "C. 因為操作簡單", explanation: "實際上量子電腦操作非常複雜。", isCorrect: false },
              { text: "D. 可以取代試管實驗", explanation: "量子模擬只是輔助，無法完全取代實驗。", isCorrect: false }
            ]
          }
        },
        {
          title: "量子優化演算法",
          description: "量子電腦可在組合最佳化問題提供新解法，如旅行推銷員問題。",
          imageUrl: "",
          quiz: {
            question: "量子優化演算法主要目標為何？",
            options: [
              { text: "A. 獲得絕對最佳解", explanation: "量子演算法多採近似或求得高品質解，並非保證絕對最佳。", isCorrect: false },
              { text: "B. 提升求解效率", explanation: "正確，利用量子特性縮短尋找最佳解的時間。", isCorrect: true },
              { text: "C. 模仿傳統演算法", explanation: "重點在於創新方法，而非模仿。", isCorrect: false },
              { text: "D. 降低網路延遲", explanation: "與網路延遲無直接關聯。", isCorrect: false }
            ]
          }
        }
      ]
    },
    {
      title: "小測驗",
      points: [
        {
          title: "整合知識測驗題",
          description: "綜合前述概念，回答以下問題：量子位元與量子糾纏的組合可帶來什麼效益？",
          imageUrl: "",
          quiz: {
            question: "量子位元在糾纏與疊加時，可帶來什麼效益？",
            options: [
              { text: "A. 同時大量探索解答", explanation: "正確，疊加搭配糾纏使量子電腦可平行處理複雜問題。", isCorrect: true },
              { text: "B. 立即傳送資料", explanation: "糾纏無法用來超光速傳遞訊息。", isCorrect: false },
              { text: "C. 增加記憶體容量", explanation: "記憶體容量取決於實體量子位元數量，並非糾纏效應。", isCorrect: false },
              { text: "D. 減少硬體成本", explanation: "目前量子硬體仍昂貴，未必能降低成本。", isCorrect: false }
            ]
          }
        }
      ]
    }
  ]
};

export default appData;
