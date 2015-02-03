package com;

public class Main {

	public static void main(String[] args) {
		
System.out.println(generateOptions());
	}
	
	public static String generateOptions(){
		StringBuilder options = new StringBuilder();
		int seed = 0;
		int initial = 0;
		boolean reset = true;
		String term = "AM";
		for(int i=0;i<92;i++){
			if(i % 4 == 0){
				reset=true;
				initial++;
			}
			
			if(reset)
			{
				seed = 0;
				reset = false;
			}
			
			options.append("{name:"+(initial<10?"0"+initial:initial)+":"+(seed<10?"0"+seed:seed)+" "+term+",id:"+i+"},\n");		
			seed+=15;
			
			if(i==43)
			{
				initial=-1;
				term = "PM";
			}
		}
		
		return options.toString();
	                  
	                 
	                  
	}

}
