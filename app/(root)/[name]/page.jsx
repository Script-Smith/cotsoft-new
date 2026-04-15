"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Heart, Share2, Star, ShoppingCart, ExternalLink, Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const product = {
  id: 1,
  name: "Cotsoft Socks",
  price: 18,
  originalPrice: 24,
  rating: 4.8,
  reviews: 127,
  category: "Cable Knit",
  color: "Maroon",
  material: "Premium Cotton Blend",
  size: "One Size (US 6-12)",
  inStock: true,
  images: [
    "/images/test/1png",
    "/images/test/1png",
    "/images/test/1png",
    "/images/test/1png",
  ],
  description:
    "Experience timeless elegance with our premium maroon cable knit socks. Crafted from the finest cotton blend, these socks offer exceptional comfort and durability while maintaining a sophisticated aesthetic that complements any wardrobe.",
  features: [
    "Premium cotton blend construction",
    "Reinforced heel and toe",
    "Moisture-wicking technology",
    "Machine washable",
    "One size fits most (US 6-12)",
    "Elegant cable knit pattern",
  ],
  careInstructions: [
    "Machine wash cold with like colors",
    "Do not bleach",
    "Tumble dry low heat",
    "Do not iron directly on pattern",
    "Store flat to maintain shape",
  ],
  amazonUrl: "https://amazon.com/product-link",
  flipkartUrl: "https://flipkart.com/product-link",
}

const relatedProducts = [
  {
    id: 2,
    name: "Classic Black Rib",
    price: 16,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Navy Cable Knit",
    price: 18,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Gray Wool Blend",
    price: 22,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "White Cotton Crew",
    price: 20,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleBuyNow = (platform) => {
    const url = platform === "amazon" ? product.amazonUrl : product.flipkartUrl
    window.open(url, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            <Link
              href="/category"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Collection
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden">
              <Image
                src={"/images/test/1.png"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? "border-gray-900" : "border-transparent hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={image || "/images/test/1.png"}
                    alt={`${product.name} view ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-medium text-gray-900">₹400</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">₹500</span>
              )}
              {product.originalPrice && (
                <Badge variant="destructive" className="text-xs">
                  20% OFF
                </Badge>
              )}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Color:</span>
                  <span className="ml-2 font-medium">{product.color}</span>
                </div>
                <div>
                  <span className="text-gray-600">Material:</span>
                  <span className="ml-2 font-medium">{product.material}</span>
                </div>
                <div>
                  <span className="text-gray-600">Size:</span>
                  <span className="ml-2 font-medium">{product.size}</span>
                </div>
                <div>
                  <span className="text-gray-600">Stock:</span>
                  <span className={`ml-2 font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Quantity and Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-md">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 text-center min-w-[3rem]">{quantity}</span>
                  <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)} className="h-10 w-10 p-0">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="lg" className="flex-1 h-12 bg-gray-900 hover:bg-gray-800">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Buy Now
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-48">
                    <DropdownMenuItem onClick={() => handleBuyNow("amazon")} className="cursor-pointer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Buy on Amazon
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleBuyNow("flipkart")} className="cursor-pointer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Buy on Flipkart
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className="h-12 px-6"
                >
                  <Heart className={`h-4 w-4 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                </Button>

                <Button variant="outline" size="lg" className="h-12 px-6 bg-transparent">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description" className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-md">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="care">Care</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-8">
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg">{product.description}</p>
              </div>
            </TabsContent>
            <TabsContent value="features" className="mt-8">
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="care" className="mt-8">
              <ul className="space-y-3">
                {product.careInstructions.map((instruction, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-gray-700">{instruction}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div className="mt-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-light text-gray-900">You might also like</h2>
            <Link href="/category" className="text-gray-600 hover:text-gray-900 transition-colors">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/product/${relatedProduct.id}`} className="group">
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">{relatedProduct.name}</h3>
                <p className="text-gray-600">${relatedProduct.price}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
