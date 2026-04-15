// app/components/SocksCollection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    title: 'Cotsoft Socks',
    price: '₹400',
    image: '/images/test/1.png',
  },
  {
    title: 'Cotsoft Socks',
    price: '₹400',
    image: '/images/test/2.png',
  },
  {
    title: 'Cotsoft Socks',
    price: '₹400',
    image: '/images/test/3.png',
  },
  {
    title: 'Cotsoft Socks',
    price: '₹400',
    image: '/images/test/1.png',
  },
]

export default function SocksCollection () {
  return (
    <section className="py-16 px-6 container">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl md:text-3xl italic font-light">Socks Collection</h2>
        <Link href="/shop" className="text-sm uppercase tracking-wide hover:underline">
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="text-center">
            <div className="aspect-[3/4] relative">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>
            <h3 className="mt-4 text-sm font-medium">{product.title}</h3>
            <p className="text-xs mt-1 text-gray-600">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
