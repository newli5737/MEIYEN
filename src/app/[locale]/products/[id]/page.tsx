"use client";

import { useState, use } from 'react';
import { useParams } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { Link } from '../../../../i18n/routing';
import { Star, ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import { ProductCard } from '../../../components/ProductCard';
import { ReviewCard } from '../../../components/ReviewCard';
import { Newsletter } from '../../../components/Newsletter';
import { ImageWithFallback } from '../../../components/figma/ImageWithFallback';

export default function ProductDetail(props: { params: Promise<{ id: string }> }) {
  const params = use(props.params);
  const id = params.id;
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const t = useTranslations('ProductDetail');
  const locale = useLocale();

  const getTranslatedProduct = () => {
    if (locale === 'en') {
      return {
        name: 'Anti-aging Repair Serum',
        description: 'Premium serum with a breakthrough formula combining precious natural ingredients and advanced technology. Helps restore, renew the skin, reduce wrinkles and enhance skin elasticity.',
        category: 'Skincare',
        benefits: [
          'Reduces wrinkles and signs of aging',
          'Enhances skin elasticity and firmness',
          'Brightens and evens skin tone',
          'Deeply hydrates, long-lasting moisture',
          'Natural ingredients, safe for all skin types',
          'No parabens, no artificial fragrances',
        ],
        ingredients: 'Vitamin C, Hyaluronic Acid, Peptide, Niacinamide, Rose Extract, Squalane',
        howToUse: 'Cleanse and tone your skin. Take 2-3 drops of serum, apply evenly to face and neck. Gently massage until fully absorbed. Use morning and night for best results.'
      };
    }
    if (locale === 'zh-TW') {
      return {
        name: '抗衰老修護精華',
        description: '採用突破性配方的高級精華液，結合珍貴天然成分與先進科技。有助於修復、更新肌膚，減少皺紋並增強肌膚彈性。',
        category: '護膚品',
        benefits: [
          '減少皺紋及老化跡象',
          '增強肌膚彈性與緊緻度',
          '提亮並均勻膚色',
          '深層保濕，持久鎖水',
          '天然成分，適合所有膚質',
          '無對羥基苯甲酸酯，無人工香料'
        ],
        ingredients: '維生素 C、玻尿酸、胜肽、菸鹼醯胺、玫瑰萃取物、角鯊烷',
        howToUse: '清潔並使用化妝水。取 2-3 滴精華液，均勻塗抹於臉部及頸部。輕輕按摩至完全吸收。早晚使用以達最佳效果。'
      };
    }
    return {
      name: 'Serum Phục Hồi Chống Lão Hóa',
      description: 'Serum cao cấp với công thức đột phá, kết hợp các thành phần thiên nhiên quý giá và công nghệ tiên tiến. Giúp phục hồi, làm mới làn da, giảm thiểu nếp nhăn và tăng cường độ đàn hồi cho da.',
      category: 'Skincare',
      benefits: [
        'Giảm thiểu nếp nhăn và dấu hiệu lão hóa',
        'Tăng cường độ đàn hồi và săn chắc da',
        'Làm sáng và đều màu da',
        'Cấp ẩm sâu, giữ ẩm lâu dài',
        'Thành phần thiên nhiên, an toàn cho mọi loại da',
        'Không chứa paraben, hương liệu nhân tạo',
      ],
      ingredients: 'Vitamin C, Hyaluronic Acid, Peptide, Niacinamide, Chiết xuất hoa hồng, Squalane',
      howToUse: 'Làm sạch và toner cho da. Lấy 2-3 giọt serum, thoa đều lên mặt và cổ. Massage nhẹ nhàng cho đến khi thấm hoàn toàn. Sử dụng sáng và tối để đạt hiệu quả tốt nhất.',
    };
  };

  const translatedContent = getTranslatedProduct();

  // Mock product data
  const product = {
    id: Number(id),
    name: translatedContent.name,
    price: 3200,
    description: translatedContent.description,
    rating: 5,
    reviews: 127,
    category: translatedContent.category,
    images: [
      'https://images.unsplash.com/photo-1770732766528-d0e9fd0df233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwYmVhdXR5JTIwc2VydW0lMjBwcm9kdWN0fGVufDF8fHx8MTc3MzU0NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1751110131615-ee32e45a100d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGNvc21ldGljcyUyMGJvdHRsZXxlbnwxfHx8fDE3NzM1NDQwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1748543668676-ea8241cb3886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpYyUyMHByb2R1Y3QlMjBmbGF0bGF5JTIwYmVpZ2V8ZW58MXx8fHwxNzczNTQ0MDgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    benefits: translatedContent.benefits,
    ingredients: translatedContent.ingredients,
    howToUse: translatedContent.howToUse,
  };

  const relatedProducts = [
    {
      id: 2,
      name: locale === 'en' ? 'Premium Moisturizer' : locale === 'zh-TW' ? '高級保濕霜' : 'Kem Dưỡng Ẩm Cao Cấp',
      price: 2400,
      image: 'https://images.unsplash.com/photo-1772191530787-b9546da02fbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmFjZSUyMGNyZWFtJTIwamFyfGVufDF8fHx8MTc3MzU0NDA4MHww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 5,
      name: locale === 'en' ? 'Deep Cleansing Foam' : locale === 'zh-TW' ? '深層清潔洗面乳' : 'Sữa Rửa Mặt Làm Sạch Sâu',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1751110131615-ee32e45a100d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBza2luY2FyZSUyMGNvc21ldGljcyUyMGJvdHRsZXxlbnwxfHx8fDE3NzM1NDQwNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
    {
      id: 4,
      name: locale === 'en' ? 'Eau de Parfum' : locale === 'zh-TW' ? '淡香精' : 'Nước Hoa Eau de Parfum',
      price: 4100,
      image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc3MzUwNDM1MXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
    },
  ];

  const customerReviews = [
    {
      name: 'Minh Anh',
      avatar: 'https://images.unsplash.com/photo-1718999398032-8fc0a58ed9c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFzaWFuJTIwYmVhdXR5JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNTQ0MDg0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      review: 'Serum tuyệt vời! Da tôi đã cải thiện rõ rệt sau 2 tuần sử dụng. Đóng gói sang trọng, mùi hương thanh lịch.',
    },
    {
      name: 'Thu Hà',
      avatar: 'https://images.unsplash.com/photo-1646526802761-98046c6f1f53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBiZWF1dHklMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM1NDQwODd8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      review: 'Chất lượng cao cấp xứng đáng với giá tiền. Serum thấm nhanh, không nhờn rít. Rất yêu thích sản phẩm này!',
    },
  ];

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-[var(--beige)] py-4">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">
              {t('home')}
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[var(--gold)] transition-colors">
              {t('products')}
            </Link>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4 rounded-2xl overflow-hidden bg-[var(--beige)] aspect-square">
                <ImageWithFallback
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-xl overflow-hidden bg-[var(--beige)] aspect-square ${
                      selectedImage === index ? 'ring-2 ring-[var(--gold)]' : ''
                    }`}
                  >
                    <ImageWithFallback
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="mb-2 inline-block bg-[var(--pink-pastel)] px-3 py-1 rounded-full text-sm">
                {product.category}
              </div>
              <h1 
                className="text-3xl lg:text-4xl mb-4 tracking-wide"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {product.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < product.rating ? 'fill-[var(--gold)] text-[var(--gold)]' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600 ml-3">{t('reviews', { count: product.reviews })}</span>
              </div>

              <p 
                className="text-3xl mb-6"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                NT$ {product.price.toLocaleString()}
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Action Buttons Removed per request */}

              {/* Benefits */}
              <div className="bg-[var(--beige)] rounded-2xl p-6">
                <h3 className="mb-4">{t('benefits')}</h3>
                <ul className="space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start text-sm text-gray-700">
                      <Check className="w-5 h-5 mr-2 flex-shrink-0 text-[var(--gold)]" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="mb-4">{t('ingredients')}</h3>
                <p className="text-gray-600 leading-relaxed">{product.ingredients}</p>
              </div>
              <div>
                <h3 className="mb-4">{t('howToUse')}</h3>
                <p className="text-gray-600 leading-relaxed">{product.howToUse}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 
            className="text-3xl lg:text-4xl mb-8 tracking-wide text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('customerReviews')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {customerReviews.map((review, index) => (
              <ReviewCard key={index} {...review} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-[var(--beige)]">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 
            className="text-3xl lg:text-4xl mb-8 tracking-wide text-center"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('relatedProducts')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
