package com.sogeti.petstore;

public enum OrderStatus {
	
	COMPLETED("completed"),
	INPROGRES("inprogress"),
	DISPATCHED("dispatched");
	
	private final String statusCode;
	
	OrderStatus(String statusCode){
		this.statusCode = statusCode;
	}

	public String getStatusCode(){
		return this.statusCode;
				
	}
}
