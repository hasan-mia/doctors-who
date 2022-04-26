import{ useEffect, useState } from 'react';

const useBanner = () => {
	const [banners, setBanners] = useState([]);
	useEffect(() => {
		fetch('data/banner.json')
			.then(res => res.json())
			.then(data => setBanners(data))
	}, []);

	return [banners, setBanners];
};

export default useBanner;