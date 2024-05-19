function merge(nums1, m, nums2, n){
	let f=0;
	let f2;
	let i;
	let i2;
	for (i = 1; i < m; i++)
	{
		if (nums1[i-1]>nums1[i]){
			f=1;
		}
	}
	for (i = 1; i < n; i++)
	{
		if (nums2[i-1]>nums2[i]){
			f=1;
		}
	}
	for (i = 0; i < n; i++)
	{
		nums1[m+i] = nums2[i];
	}

	if (f==0){
		for (i = 0; i < n; i++)
		{
			i2=0;
			f=0;
			while ((m-1-i2+i>=0)&&(f == 0)){
				
				if(nums1[m-1-i2+i] > nums1[m-i2+i]){
					f2 = nums1[m-1-i2+i];
					nums1[m-1-i2+i] = nums1[m-i2+i];
					nums1[m-i2+i] = f2;
				} else{
					f=1;
				}
				i2=i2+1;
			}
		}
	}

	for (i = 0; i < n+m; i++)
	{
		alert(nums1[i]);
	}
}
const nums1 = [2, 3, 6, 6, 0, 0, 0];
const m = 4;
const nums2 = [1, 2, 3];
const n = 3;
merge(nums1, m, nums2, n);


