import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = ({ children, className }: HeaderProps) => {
	return (
		<div className={cn('header', className)}>
			<Link href='/' className='md:flex-1'>
				<div className='flex items-center justify-start '>
					<Image src='/assets/icons/logo1.svg' alt='Logo with name' width={36} height={36} />
					<h2 className='text-20-semibold hidden md:block ml-2 text-blue-50'>LiveDocs</h2>
				</div>
			</Link>
			{children}
		</div>
	);
};

export default Header;
