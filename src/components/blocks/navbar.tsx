import { COMPANY_INFO } from '@/consts';

// Navigation configuration
 const ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '#features' },
  { label: 'Blog', href: '/blog' }
];


export const Navbar = () => {
  return (
   <header className='w-full border-b sticky top-0 z-50 bg-white' role='banner'>
    <div className='container mx-auto px-4 py-6 flex justify-between items-center'>
      <a href='/' className='text-2xl font-bold flex items-center gap-2' aria-label={`${COMPANY_INFO.name} Home`}>
        <img
          src={COMPANY_INFO.logo}
          alt={`${COMPANY_INFO.name} Logo`}
          width={25}
          height={25}
          className='dark:invert'
        />
        <span>{COMPANY_INFO.name}</span>
      </a>
      <nav aria-label='Primary navigation'>
        <ul className='flex gap-6'>
          {ITEMS.map((item) => (
            <li>
              <a
                href={item.href}
                className='text-base font-medium text-muted-foreground hover:text-foreground transition-colors'
                aria-label={`Navigate to ${item.label}`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
  );
};
