import { Building2, Users, Award, TrendingUp } from 'lucide-react'

export default function Statistics() {
  const stats = [
    {
      icon: Building2,
      value: '3000+',
      label: 'Properties Sold',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Users,
      value: '2500+',
      label: 'Happy Customers',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Award,
      value: '25+',
      label: 'Years Experience',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: TrendingUp,
      value: '6',
      label: 'Premium Sites',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Why Choose Gift Real Estate?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            With over 25 years of experience, we've helped thousands of families find their perfect homes across Ethiopia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 text-center hover:shadow-lg transition group">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl mb-3">🏠</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Premium Locations</h3>
            <p className="text-gray-600">All properties are located in the most desirable neighborhoods of Addis Ababa</p>
          </div>
          <div className="p-6 bg-green-50 rounded-lg">
            <div className="text-3xl mb-3">💰</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Flexible Payment Plans</h3>
            <p className="text-gray-600">We offer customized payment plans to suit your financial needs</p>
          </div>
          <div className="p-6 bg-purple-50 rounded-lg">
            <div className="text-3xl mb-3">✨</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Quality Assurance</h3>
            <p className="text-gray-600">Every property meets our strict quality standards and certifications</p>
          </div>
        </div>
      </div>
    </section>
  )
}
