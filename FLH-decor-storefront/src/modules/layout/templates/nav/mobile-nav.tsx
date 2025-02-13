import NavItems from './nav-items';

export default function MobileNav() {
  return (
    <div className="flex flex-col space-y-4 p-4">
      <NavItems mobileView />
    </div>
  );
}