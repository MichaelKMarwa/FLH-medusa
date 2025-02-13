type NavItemsProps = {
    mobileView?: boolean;
  };
  
  export default function NavItems({ mobileView = false }: NavItemsProps) {
    return (
      <>
        <a href="#" className={`${mobileView ? 'text-lg' : 'text-base'} text-text hover:text-primary transition-colors`}>
          Products
        </a>
        <a href="#" className={`${mobileView ? 'text-lg' : 'text-base'} text-text hover:text-primary transition-colors`}>
          Collections
        </a>
        <a href="#" className={`${mobileView ? 'text-lg' : 'text-base'} text-text hover:text-primary transition-colors`}>
          About
        </a>
      </>
    );
  }