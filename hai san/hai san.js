
class index{
	constructor(hau,nhim,tom,gia){
	    this.hau = parseInt(hau);
		this.nhim = parseInt(nhim);
		this.tom = parseInt(tom);
		this.gia = parseInt(gia);		
	}
}

function myFunction(){
	var H = new index(document.getElementById("H-hau").value,
					  document.getElementById("H-nhim").value,
					  document.getElementById("H-tom").value);

	var A = new index(document.getElementById("A-hau").value,
					  document.getElementById("A-nhim").value,
					  document.getElementById("A-tom").value,
					  document.getElementById("A-gia").value);

	var B = new index(document.getElementById("B-hau").value,
					  document.getElementById("B-nhim").value,
					  document.getElementById("B-tom").value,
					  document.getElementById("B-gia").value);

	var T1 = new index(0,0,0,0);
	var T2 = new index(0,0,0,0);
	var max,maxA,maxB,i=0,temp,k;

	while(1){
		T1.hau += A.hau;
		T1.tom += A.tom;
		T1.nhim += A.nhim;
		T1.gia += A.gia;
		i++;
		if(T1.hau > H.hau || T1.tom > H.tom || T1.nhim > H.nhim){
			i--;
			max = T1.gia-A.gia;
			maxA = A.gia*i;
			maxB = 0;
			max = T1.gia-A.gia;
			break;
		}
	}

	for(k=i-1 ; 1 ; k--){
		
		if(k==-1){
			break;
		}
		
		T1.hau = A.hau * k;
		T1.tom = A.tom * k;
		T1.nhim = A.nhim * k;
		T1.gia = A.gia * k;
		
		i=0;
		while(1){
			T2.hau += B.hau;
			T2.tom += B.tom;
			T2.nhim += B.nhim;
			T2.gia += B.gia;
			i++;
			if(T1.hau + T2.hau > H.hau || T1.tom + T2.tom > H.tom || T1.nhim + T2.nhim > H.nhim){
				temp = T1.gia+T2.gia-B.gia;
				if(max < temp){
					max = temp;
					maxA = k;
					maxB = --i;
				}
				break;
			}
		}
		
		T2.hau = 0;
		T2.tom = 0;
		T2.nhim = 0;
		T2.gia = 0;
	}

	document.getElementById("result1").innerHTML = "Lợi nhuận cao nhất : " + max +" $";
	document.getElementById("result2").innerHTML = "Cần phải làm " 
													+ maxA + " món A và "
													+ maxB + " món B";

}

