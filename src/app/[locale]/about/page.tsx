import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('About');

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-[var(--pink-pastel)] py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 
              className="text-4xl lg:text-6xl mb-6 tracking-wide"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              {t('title')}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-16">
            <div className="text-center">
              <h2 className="text-3xl mb-6 text-[var(--gold)]">{t('ourStory')}</h2>
              <p className="text-gray-600 leading-loose text-lg">{t('storyText')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-gray-100">
              <div>
                <h3 className="text-2xl mb-4">{t('mission')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('missionText')}</p>
              </div>
              <div>
                <h3 className="text-2xl mb-4">{t('values')}</h3>
                <p className="text-gray-600 leading-relaxed">{t('valuesText')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
