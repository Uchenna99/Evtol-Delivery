export enum EvtolState {
    IDLE,
    LOADING,
    LOADED,
    DELIVERING,
    DELIVERED,
    RETURNING
}


export interface LayoutContext {
    user: EvtolUser | null;
}


export interface DecodedToken {
    exp: number;
    iat: number;
    id: string; 
    name: string; 
    role: string;
};


export interface EvtolUser {
  id: string;
  googleId: string | null;
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  phoneNumber: string;
  occupation: string | null;
  image: string | null;
  password: string;
  role: "USER" | "ADMIN";
  orderHistory: DeliveryOrder[];
  emailVerified: boolean;
  otp: string | null;
  otpExpiry: Date | null;
  createdAt: Date;
  updatedAt: Date;
}


export interface OrderItem {
    id: number;
    orderId: string;
    supplyId: number;
    name: string;
    quantity: number;
    weight: number;
    price: number;
}


export interface DeliveryOrder {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    orderItem:  OrderItem[];
    reference: string | null;
    paymentStatus: 'PENDING' | 'SUCCESSFUL' | 'FAILED';
    deliveryStatus: 'PENDING' | 'IN_TRANSIT' | 'DELIVERED' | 'CANCELLED';
    destination: string;
    evtolId: number | null;
    userId: string;
}


export enum SupplyCategories {
  Emergency,
  General,
  Laboratory,
  HospitalSupplies,
  ColdChain
}


export interface SupplyCategory {
    name: string;
    description: string;
    image: string;
}


// export interface DB_GetUser {
//     id: string;
//     googleId: string | null;
//     firstName: string;
//     lastName: string;
//     age: string;
//     email: string;
//     phoneNumber: string;
//     image: string | null;
//     region: string;
//     role: "USER" | "ADMIN";
//     emailVerified: boolean;
// }


export interface JwtResponse {
    accessToken: string;
}


export interface Medication {
    id: number;
    name: string;
    weight: number;
    code: string;
    image: string;
    price: number;
    group: string;
}
  

export interface Order {
    medication: Medication;
    quantity: number;
    evtolId: number;
    orderId: string;
}

export interface DB_Order {
    id: string;
    createdAt: string;
    updatedAt: string;
    evtolId: number | null;
    userId: string;
    loads: DB_Load[]
    status: string;
}



export interface UserOrders {
    userId: string;
    order: Order[];
}


export interface DB_Evtol {
    id: number;
    serialNumber: string;
    model: string;
    image: string;
    batteryCapacity: number;
    state: EvtolState;
}


export interface DB_Load {
    id: string;
    medicationsId: number;
    quantity: number;
    orderId: string;
}


export interface CreateLoadDTO {
    medicationsId: number;
    quantity: number;
    orderId: string;
}


export interface PaystackInitResponse {
    status: boolean;
    message: string;
    data: {
        authorization_url: string;
        access_code: string;
        reference: string;
    }
}

export interface Supply {
    name: string;
    description: string;
    price: number;
}