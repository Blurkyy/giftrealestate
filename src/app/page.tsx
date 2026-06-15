import Hero from '@/components/Hero'
import FeaturedProperties from '@/components/FeaturedProperties'
import SearchSection from '@/components/SearchSection'
import Statistics from '@/components/Statistics'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <SearchSection />
      <Statistics />
      <FeaturedProperties />
      <CTA />
    </>
  )
}
