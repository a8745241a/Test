//定义一个item类，传入数据 图片、标题、描述
function ListItem (img_item, title_item, desc_item) {
	//数据属性
	this.img_item = img_item;
	this.title_item = title_item;
	this.desc_item = desc_item;
	//函数属性(创建item，并且添加容器)
	this.createToAdd = function () {
		//最外层div
		var item_div = document.createElement("div");
		item_div.setAttribute("class", "itemClass_1");
		
		//内层左div
		var item_left_div = document.createElement("div");
		item_div.appendChild(item_left_div);
		
		//左 div img
		var img = document.createElement("img");
		img.setAttribute("src", this.img_item);
		item_left_div.appendChild(img);
		
		//内层右div
		var item_right_div = document.createElement("div");
		item_div.appendChild(item_right_div);
		
		//右  h3
		var h3 = document.createElement("h3");
		h3.innerText = title_item;
		item_right_div.appendChild(h3);
		
		//右  p
		var p = document.createElement("p");
		p.innerText = desc_item;
		item_right_div.appendChild(p);
		
		//类 div
		document.querySelector(".mianScreen").appendChild(item_div);
	}
		
		
}
			var url="http://www.marrymin.com/LOL/News?item=最新&pageIndex=";
			var i=1;
			//按钮响应函数
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
				//获取完整的下载数据
				var arr =JSON.parse(xhr.responseText);
				for(var j=0;j<arr.length;j++){
				//创建item
				var item = new ListItem(arr[j].img, arr[j].title,arr[j].desc);
				//创建元素，将item添加到mainScreen
				item.createToAdd();
				}
			  }
			}
			xhr.open("GET",url+i,true);
			xhr.send(null);
			i++;
//按钮响应函数
function buttonClick () {
			//定义URL（需要拼接页码）
			url="http://www.marrymin.com/LOL/News?item=最新&pageIndex=";
			//按钮响应函数
			var xhr=new XMLHttpRequest();
			xhr.onreadystatechange=function(){
				if(xhr.readyState==4){
				//获取完整的下载数据
				var arr =JSON.parse(xhr.responseText);
				for(var j=0;j<arr.length;j++){
				//创建item
				var item = new ListItem(arr[j].img, arr[j].title,arr[j].desc);
				//创建元素，将item添加到mainScreen
				item.createToAdd();
				} 
			  }
			}
			xhr.open("GET",url+i,true);
			xhr.send(null);
			i++;
}