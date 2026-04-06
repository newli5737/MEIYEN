"use client";

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../../../i18n/routing';
import { Calendar, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';
import { Newsletter } from '../../../components/Newsletter';

export default function BlogDetail({ params }: { params: { id: string } }) {
  const t = useTranslations('Blog');
  const locale = useLocale();
  const postId = parseInt(params.id, 10);

  const getTranslatedPost = (id: number) => {
    const translations: Record<number, Record<string, {title: string, excerpt: string, date: string, categoryLabel: string, content: string[]}>> = {
      1: {
        en: { 
          title: '10 Skincare Routine Steps for Perfect Skin', 
          excerpt: 'Discover the 10-step skincare routine that keeps your skin healthy and glowing every day.', 
          date: 'March 10, 2026', 
          categoryLabel: 'Skincare',
          content: [
            "A comprehensive 10-step skincare routine is the secret to flawlessly glowing skin. It starts with a rigorous double-cleansing process to remove all impurities, followed by a gentle toner to balance the skin's pH.",
            "Next, essences and serums deliver concentrated active ingredients deep into the skin. Don't forget an eye cream to care for the delicate skin around your eyes.",
            "Finally, seal everything in with a rich moisturizer and never skip sunscreen during the day to protect your skin from harmful UV rays."
          ]
        },
        'zh-TW': { 
          title: '完美肌膚的10步護膚程序', 
          excerpt: '探索讓您肌膚每天保持健康光采的10步護膚程序。', 
          date: '2026年3月10日', 
          categoryLabel: '保養',
          content: [
            "全面的10步護膚程序是擁有無瑕光澤肌膚的秘訣。首先是嚴格的雙重清潔過程以去除所有雜質，然後使用溫和的化妝水平衡肌膚的pH值。",
            "接下來，精華液將高濃度的活性成分深入肌膚。別忘了使用眼霜來呵護眼周嬌嫩的肌膚。",
            "最後，用豐盈的保濕霜鎖住水分，並且白天絕對不能省略防曬霜，以保護肌膚免受有害紫外線的傷害。"
          ]
        }
      },
      2: {
        en: { 
          title: 'Natural Ingredients in Luxury Cosmetics', 
          excerpt: 'Learn about precious natural ingredients like Vitamin C, Hyaluronic Acid, and Peptides used in luxury cosmetics.', 
          date: 'March 8, 2026', 
          categoryLabel: 'Ingredients',
          content: [
            "Luxury cosmetics differentiate themselves through the use of rare, highly concentrated natural ingredients that deliver scientific results.",
            "Vitamin C is renowned for brightening skin and producing collagen, while Hyaluronic Acid provides unparalleled hydration, holding up to 1000 times its weight in water.",
            "Peptides act as building blocks for proteins like collagen and elastin, ensuring your skin remains firm and youthful."
          ]
        },
        'zh-TW': { 
          title: '高級化妝品中的天然成分', 
          excerpt: '了解高級化妝品中使用的珍貴天然成分，如維生素 C、玻尿酸和胜肽。', 
          date: '2026年3月8日', 
          categoryLabel: '成分',
          content: [
            "高級化妝品憑藉使用罕見且高濃度的天然成分而與眾不同，這些成分能帶來科學證實的效果。",
            "維生素 C 以提亮膚色和促進膠原蛋白生成而聞名，而玻尿酸則提供無與倫比的保濕效果，能鎖住自身重量 1000 倍的水分。",
            "胜肽則是膠原蛋白和彈性蛋白等蛋白質的基礎構成，能確保您的肌膚保持緊緻和年輕。"
          ]
        }
      },
      3: {
        en: { 
          title: '2026 Makeup Trends: Minimalist Beauty', 
          excerpt: 'Explore the minimalist makeup trend taking over 2026. Less is more, enhancing your natural beauty.', 
          date: 'March 5, 2026', 
          categoryLabel: 'Makeup',
          content: [
            "The year 2026 has marked a definitive shift towards minimalist beauty, where the mantra 'less is more' truly shines.",
            "Instead of heavy masking, the focus is on a flawless, glowing base that looks like second skin. Dewy finishes and cream-based products are essential.",
            "Bold makeup is being replaced by soft, blended features that enhance your natural bone structure and coloring."
          ]
        },
        'zh-TW': { 
          title: '2026 妝容趨勢：極簡之美', 
          excerpt: '探索席捲 2026 年的極簡化妝趨勢。少即是多，提升您的自然美。', 
          date: '2026年3月5日', 
          categoryLabel: '彩妝',
          content: [
            "2026 年標誌著極簡之美趨勢的明確轉變，'少即是多'的理念真正發光發熱。",
            "不再使用厚重的遮蓋，重點在於打造完美、發光的底妝，看起來就像第二層肌膚。水潤的妝效和霜狀產品是不可或缺的。",
            "濃妝正被柔和、暈染的特徵所取代，更能凸顯您自然的骨骼結構和色彩。"
          ]
        }
      },
      4: {
        en: { 
          title: 'Summer Skincare Secrets', 
          excerpt: 'Effective skincare tips for summer, keeping your skin smooth without being dry or oily.', 
          date: 'March 2, 2026', 
          categoryLabel: 'Skincare',
          content: [
            "Summer brings unique challenges for your skin, from intense UV rays to increased humidity and sweat. Your routine must adapt to maintain a healthy balance.",
            "Switching to a lighter, gel-based moisturizer can prevent clogged pores while ensuring sufficient hydration. Regular exfoliation becomes even more crucial.",
            "Reapplying broad-spectrum sunscreen every two hours is non-negotiable for preventing premature aging and sun damage."
          ]
        },
        'zh-TW': { 
          title: '夏季護膚秘訣', 
          excerpt: '夏季有效的護膚秘訣，讓您的肌膚保持光滑，不乾燥也不油膩。', 
          date: '2026年3月2日', 
          categoryLabel: '保養',
          content: [
            "夏季為您的肌膚帶來獨特的挑戰，從強烈的紫外線到增加的濕度和汗水。您的護膚程序必須適應這些變化以保持健康平衡。",
            "改用較輕盈的凝膠狀保濕霜可以防止毛孔堵塞，同時確保充足的水分。定期去角質變得更加關鍵。",
            "每兩小時重新塗抹廣譜防曬霜對於防止提早老化和曬傷是絕對必要的。"
          ]
        }
      },
      5: {
        en: { 
          title: 'How to Choose the Right Perfume for You', 
          excerpt: 'Guide to choosing a perfume that matches your personality and style. From woods to florals, each has its own appeal.', 
          date: 'February 28, 2026', 
          categoryLabel: 'Lifestyle',
          content: [
            "Finding your signature scent is a deeply personal journey. Perfumes are categorized into families such as floral, oriental, woody, and fresh, each evoking different moods.",
            "Always test a scent on your skin rather than a blotting paper, as your body's natural chemistry will uniquely alter the fragrance profile.",
            "A well-chosen perfume not only completes your outfit but acts as an invisible accessory that leaves a lasting impression wherever you go."
          ]
        },
        'zh-TW': { 
          title: '如何選擇適合您的香水', 
          excerpt: '選擇符合您個性和風格的香水指南。從木質到花香，每種都有獨特的魅力。', 
          date: '2026年2月28日', 
          categoryLabel: '生活方式',
          content: [
            "尋找您的標誌性香水是一趟非常個人的旅程。香水被分為花香、東方、木質和清新等家族，每種都會喚起不同的情緒。",
            "始終在您的皮膚上測試香味，而不是在試香紙上，因為您身體的自然化學反應會獨特地改變香氣的輪廓。",
            "精心挑選的香水不僅能完善您的裝扮，還如同隱形的配飾，讓您無論走到哪裡都能留下深刻的印象。"
          ]
        }
      },
      6: {
        en: { 
          title: 'Skincare in Your 30s: Preventing Aging', 
          excerpt: 'What you need to know about skincare in your 30s, focusing on preventing and slowing down skin aging.', 
          date: 'February 25, 2026', 
          categoryLabel: 'Skincare',
          content: [
            "Entering your 30s means it's time to shift your skincare focus primarily towards anti-aging and preventative measures as natural collagen production begins to slow.",
            "Incorporating Retinol into your nighttime routine is essential for accelerating cell turnover and reducing the appearance of fine lines.",
            "Additionally, antioxidant serums, such as Vitamin C and E, will protect your skin from environmental damage that accelerates the aging process."
          ]
        },
        'zh-TW': { 
          title: '30歲的護膚：預防老化', 
          excerpt: '30歲護膚須知，重點在於預防和減緩皮膚老化。', 
          date: '2026年2月25日', 
          categoryLabel: '保養',
          content: [
            "進入30歲意味著是時候將護膚重點轉向抗老和預防措施，因為天然膠原蛋白的生成開始減緩。",
            "將視黃醇 (A醇) 加入您的夜間護理程序，對於加速細胞更新和減少細紋的出現至關重要。",
            "此外，抗氧化精華液（如維生素 C 和 E）能保護您的肌膚免受加速老化過程的環境損害。"
          ]
        }
      },
      7: {
        en: { 
          title: 'Common Makeup Mistakes', 
          excerpt: 'Avoid common makeup mistakes for the most perfect and natural makeup look.', 
          date: 'February 20, 2026', 
          categoryLabel: 'Makeup',
          content: [
            "Many makeup enthusiasts fall into habits that unknowingly add years to their appearance or create an unnatural finish.",
            "One common error is using a foundation shade that doesn't match your neck, creating a harsh, visible line of demarcation. Always blend down.",
            "Another frequent mistake is applying concealer that is too light under the eyes, which highlights dark circles rather than concealing them."
          ]
        },
        'zh-TW': { 
          title: '常見的化妝錯誤', 
          excerpt: '避免常見的化妝錯誤，打造最完美自然的妝容。', 
          date: '2026年2月20日', 
          categoryLabel: '彩妝',
          content: [
            "許多化妝愛好者會不知不覺地養成讓自己顯老或妝效不自然的習慣。",
            "一個常見的錯誤是使用與脖子顏色不符的粉底，這會造成明顯的色差界線。請務必向下暈染。",
            "另一個常見的錯誤是在眼下塗抹過淺的遮瑕膏，這不僅無法遮蓋黑眼圈，反而會使其更加明顯。"
          ]
        }
      },
      8: {
        en: { 
          title: 'Comprehensive Body Care', 
          excerpt: 'Head-to-toe body care routine to keep your skin soft and fragrant.', 
          date: 'February 15, 2026', 
          categoryLabel: 'Body Care',
          content: [
            "While facial care is heavily emphasized, a comprehensive body care routine is equally important for holistic well-being and confidence.",
            "Start with a gentle body scrub to remove dead cells once a week, followed by a nourishing body wash that respects the skin barrier.",
            "Always apply body lotion or oil while the skin is still damp to lock in maximum hydration and keep the skin supple and radiant."
          ]
        },
        'zh-TW': { 
          title: '全面身體護理', 
          excerpt: '從頭到腳的身體護理程序，讓您的肌膚保持柔軟芬芳。', 
          date: '2026年2月15日', 
          categoryLabel: '身體保養',
          content: [
            "雖然臉部護理受到高度重視，但全面的身體護理程序對於整體的健康和自信同樣重要。",
            "每週使用一次溫和的身體磨砂膏去除死皮細胞，然後使用呵護肌膚屏障的滋養沐浴露。",
            "始終在肌膚仍然微濕時塗抹身體乳液或身體油，以鎖住最大水分，並保持肌膚的柔軟和光澤。"
          ]
        }
      },
      9: {
        en: { 
          title: 'Natural Beauty with Food', 
          excerpt: 'Discover foods that help beautify skin from within, bringing a natural glow.', 
          date: 'February 10, 2026', 
          categoryLabel: 'Lifestyle',
          content: [
            "True beauty originates from within, heavily influenced by the nutrition we provide our bodies. Diet plays a pivotal role in skin health.",
            "Fatty fishes like salmon are packed with Omega-3s, which decrease inflammation and keep skin consistently moisturized.",
            "Avocados and walnuts are rich in healthy fats and vitamins that act as natural moisturizers and protect against environmental damage, fostering an inner glow."
          ]
        },
        'zh-TW': { 
          title: '食物帶來的自然之美', 
          excerpt: '探索由內而外美化肌膚的食物，帶來自然光采。', 
          date: '2026年2月10日', 
          categoryLabel: '生活方式',
          content: [
            "真正的美源自於內在，深受我們為身體提供的營養所影響。飲食在肌膚健康中扮演著關鍵角色。",
            "像鮭魚這樣的高脂肪魚類富含 Omega-3，能減少發炎並使肌膚持續保持潤澤。",
            "酪梨和核桃含有豐富的健康脂肪和維生素，可作為天然的保濕劑，並保護肌膚免受環境損害，散發由內而外的光芒。"
          ]
        }
      }
    };
    return translations[id]?.[locale];
  };

  const postData = getTranslatedPost(postId);

  const images = {
    1: 'https://images.unsplash.com/photo-1614159102349-eddb8b985aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMHJvdXRpbmUlMjBiZWF1dHklMjBwcm9kdWN0c3xlbnwxfHx8fDE3NzM1NDQwODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    2: 'https://images.unsplash.com/photo-1739981248829-ac9d4a6fecfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwY29zbWV0aWNzJTIwaW5ncmVkaWVudHN8ZW58MXx8fHwxNzczNTEyNjg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    3: 'https://images.unsplash.com/photo-1748543668676-ea8241cb3886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHByb2R1Y3QlMjBmbGF0bGF5JTIwYmVpZ2V8ZW58MXx8fHwxNzczNTQ0MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    4: 'https://images.unsplash.com/photo-1731514771613-991a02407132?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGElMjB3ZWxsbmVzcyUyMGJlYXV0eSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NzM1NDQwODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    5: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3MzUwNDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    6: 'https://images.unsplash.com/photo-1736309530611-1cfd1e6602b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxza2luY2FyZSUyMGJlYXV0eSUyMGxpZmVzdHlsZSUyMHdvbWFufGVufDF8fHx8MTc3MzU0NDA4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    7: 'https://images.unsplash.com/photo-1527632911563-ee5b6d53465b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYWtldXAlMjBmb3VuZGF0aW9ufGVufDF8fHx8MTc3MzU0NDA4MXww&ixlib=rb-4.1.0&q=80&w=1080',
    8: 'https://images.unsplash.com/photo-1760647422523-f532034a49ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYm9keSUyMGxvdGlvbiUyMGJvdHRsZXxlbnwxfHx8fDE3NzM1NDQwODN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    9: 'https://images.unsplash.com/photo-1646526802761-98046c6f1f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1NDQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  };

  const image = images[postId as keyof typeof images] || images[1];

  if (!postData) {
    return (
      <div className="pt-32 pb-20 text-center min-h-[50vh]">
        <h1 className="text-3xl mb-6">Post Not Found</h1>
        <Link href="/blog" className="text-[var(--gold)] hover:underline">
          {t('backToBlog')}
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Post Header */}
      <section className="bg-[var(--beige)] py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-gray-500 hover:text-[var(--gold)] transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('backToBlog')}
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-white/80 px-4 py-1.5 rounded-full text-sm font-medium tracking-wide shadow-sm">
                {postData.categoryLabel}
              </span>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{postData.date}</span>
              </div>
            </div>

            <h1 
              className="text-4xl lg:text-6xl mb-6 leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {postData.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
              {postData.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container mx-auto px-4 lg:px-8 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl aspect-[21/9]">
          <ImageWithFallback
            src={image}
            alt={postData.title}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            
            <div className="prose prose-lg prose-gray max-w-none">
              {postData.content.map((paragraph, idx) => (
                <p key={idx} className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Author & Share */}
            <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[var(--gold)]/10 rounded-full flex items-center justify-center">
                  <span className="text-[var(--gold)] font-serif font-bold text-xl">L</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{t('writtenBy')}</p>
                  <p className="text-sm text-gray-500">{postData.date}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 font-medium">{t('share')}</span>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[var(--gold)] hover:text-white transition-all cursor-pointer">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[var(--gold)] hover:text-white transition-all cursor-pointer">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-[var(--gold)] hover:text-white transition-all cursor-pointer">
                  <Linkedin className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter */}
      <Newsletter />
    </div>
  );
}
