// app/components/SocksCollection.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    title: 'Black Ankle Socks',
    price: '₹400',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334540381-M40Q0I1IE32UM0UGF4IF/Day2_Shot9_021170170_84_7974copy.jpg?format=300w',
  },
  {
    title: 'Red Ribbed Socks',
    price: '₹400',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334550334-8SMJLTY7TUHMNKFNHZRJ/Day2_Shot1_021131755_42_145v2.jpg?format=300w',
  },
  {
    title: 'Patterned Crew Socks',
    price: '₹400',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334543915-C76OG5ZOKHJ9GGVKTXYC/Day2_Shot2_021160035_01_6070copy.jpg?format=300w',
  },
  {
    title: 'Yellow Low-Cut Socks',
    price: '₹400',
    image: 'https://images.squarespace-cdn.com/content/v1/5e1722e826484743f588e3c5/1696334541784-VO0ZERFG7RESIRH8YGUE/Day2_Shot7_021140803_14_3809.jpg?format=300w',
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
