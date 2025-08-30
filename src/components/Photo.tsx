import React from 'react';

type PhotoProps = {
	src: string;
	alt?: string;
	className?: string;
	style?: React.CSSProperties;
};

const Photo: React.FC<PhotoProps> = ({ src, alt = '', className = '', style }) => {
	return (
		<img
			src={src}
			alt={alt}
			className={className}
			loading="lazy"
			draggable={false}
			style={{ userSelect: 'none', ...style }}
		/>
	);
};

export default Photo;
