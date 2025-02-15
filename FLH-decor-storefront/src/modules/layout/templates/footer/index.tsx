export function Footer() {
  return (
    <footer className="bg-secondary text-background py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-space text-lg font-bold">FLC</h3>
            <p className="font-inter text-sm opacity-75">
              Premium furniture for modern living
            </p>
          </div>
          
          <div className="space-y-2">
            <h4 className="font-space font-medium">Collections</h4>
            {/* Add footer links */}
          </div>

          <div className="space-y-2">
            <h4 className="font-space font-medium">Company</h4>
            {/* Add footer links */}
          </div>

          <div className="space-y-2">
            <h4 className="font-space font-medium">Connect</h4>
            {/* Add social links */}
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="font-inter text-sm opacity-75">
            © 2025 FLC. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  )
}