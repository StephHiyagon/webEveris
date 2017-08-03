'use strict';

const soloLetras = (e)=>{
	let code = e.which;

	if((code>=97 && code<=122) ||(code>=65 && code<=90) || code==39 || code==32 || code==241 || code==209){
		return true;
	}else{
		return false;
	}
};
