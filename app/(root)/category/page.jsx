"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, Filter, Grid, List, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

const products = [
  {
    id: 1,
    name: "Maroon Cable Knit",
    image: "/placeholder.svg?height=300&width=300",
    category: "Cable Knit",
    color: "Maroon",
    size: "One Size",
  },
  {
    id: 2,
    name: "Classic Black Rib",
    image: "/placeholder.svg?height=300&width=300",
    category: "Ribbed",
    color: "Black",
    size: "One Size",
  },
  {
    id: 3,
    name: "Black Ankle Socks",
    image: "/placeholder.svg?height=300&width=300",
    category: "Ankle",
    color: "Black",
    size: "One Size",
  },
  {
    id: 4,
    name: "Red Ribbed Socks",
    image: "/placeholder.svg?height=300&width=300",
    category: "Ribbed",
    color: "Red",
    size: "One Size",
  },
  {
    id: 5,
    name: "Patterned Crew Socks",
    image: "/placeholder.svg?height=300&width=300",
    category: "Crew",
    color: "Blue",
    size: "One Size",
  },
  {
    id: 6,
    name: "Yellow Low-Cut Socks",
    image: "/placeholder.svg?height=300&width=300",
    category: "Low-Cut",
    color: "Yellow",
    size: "One Size",
  },
  {
    id: 7,
    name: "White Cotton Crew",
    image: "/placeholder.svg?height=300&width=300",
    category: "Crew",
    color: "White",
    size: "One Size",
  },
  {
    id: 8,
    name: "Gray Wool Blend",
    image: "/placeholder.svg?height=300&width=300",
    category: "Wool",
    color: "Gray",
    size: "One Size",
  },
]

export default function CategoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [viewMode, setViewMode] = useState("grid")
  const [sortBy, setSortBy] = useState("featured")
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedColors, setSelectedColors] = useState([])

  const categories = ["Cable Knit", "Ribbed", "Ankle", "Crew", "Low-Cut", "Wool"]
  const colors = ["Black", "Red", "Blue", "Yellow", "White", "Gray", "Maroon"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesColor = selectedColors.length === 0 || selectedColors.includes(product.color)
    return matchesSearch && matchesCategory && matchesColor
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "name-az":
        return a.name.localeCompare(b.name)
      case "name-za":
        return b.name.localeCompare(a.name)
      case "newest":
        return b.id - a.id
      default:
        return 0
    }
  })

  const handleCategoryChange = (category, checked) => {
    setSelectedCategories((prev) => (checked ? [...prev, category] : prev.filter((c) => c !== category)))
  }

  const handleColorChange = (color, checked) => {
    setSelectedColors((prev) => (checked ? [...prev, color] : prev.filter((c) => c !== color)))
  }

  const FilterContent = () => (
    <div className="space-y-6">
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium text-lg">Category</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 mt-4">
          {categories.map((category) => (
            <div key={category} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category}`}
                checked={selectedCategories.includes(category)}
                onCheckedChange={(checked) => handleCategoryChange(category, !!checked)}
              />
              <Label htmlFor={`category-${category}`} className="text-sm font-normal cursor-pointer">
                {category}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>

      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex items-center justify-between w-full">
          <h3 className="font-medium text-lg">Color</h3>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-3 mt-4">
          {colors.map((color) => (
            <div key={color} className="flex items-center space-x-2">
              <Checkbox
                id={`color-${color}`}
                checked={selectedColors.includes(color)}
                onCheckedChange={(checked) => handleColorChange(color, !!checked)}
              />
              <Label htmlFor={`color-${color}`} className="text-sm font-normal cursor-pointer">
                {color}
              </Label>
            </div>
          ))}
        </CollapsibleContent>
      </Collapsible>
    </div>
  )

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-8">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-2">Socks Collection</h1>
            <p className="text-gray-600 text-lg">Timeless elegance in Every Detail</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-8">
              <h2 className="text-xl font-medium mb-6">Filters</h2>
              <FilterContent />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search and Controls */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 border-gray-300 focus:border-gray-500"
                />
              </div>

              <div className="flex gap-2">
                {/* Mobile Filter Sheet */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" className="lg:hidden h-12 px-4 bg-transparent">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                      <SheetDescription>Refine your search results</SheetDescription>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* Sort Dropdown */}
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48 h-12">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="name-az">Name A-Z</SelectItem>
                    <SelectItem value="name-za">Name Z-A</SelectItem>
                  </SelectContent>
                </Select>

                {/* View Mode Toggle */}
                <div className="hidden sm:flex border border-gray-300 rounded-md">
                  <Button
                    variant={viewMode === "grid" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("grid")}
                    className="rounded-r-none h-12"
                  >
                    <Grid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === "list" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setViewMode("list")}
                    className="rounded-l-none h-12"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {sortedProducts.length} of {products.length} products
              </p>
            </div>

            {/* Products Grid */}
            <div
              className={`grid gap-6 ${
                viewMode === "grid" ? "grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
              }`}
            >
              {sortedProducts.map((product) => (
                <div key={product.id} className="group">
                  <Link href={`/${product.name}`} className="block">
                    <div className={`${viewMode === "list" ? "flex gap-6" : ""}`}>
                      <div
                        className={`relative overflow-hidden bg-gray-50 rounded-lg ${
                          viewMode === "list" ? "w-48 h-48 flex-shrink-0" : "aspect-square"
                        }`}
                      >
                        <Image
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes={
                            viewMode === "list" ? "192px" : "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                          }
                        />
                      </div>
                      <div className={`${viewMode === "list" ? "flex-1 py-4" : "pt-4"}`}>
                        <h3 className="font-medium text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {product.category} • {product.color}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* No Results */}
            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-4">No products found matching your criteria.</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategories([])``
                    setSelectedColors([])
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
