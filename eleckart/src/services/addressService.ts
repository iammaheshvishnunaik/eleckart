import type { Address } from "../types/address";

const API_URL = "http://localhost:5000/api/addresses";

export const getAddresses = async (
    token: string
): Promise<Address[]> => {
    const response = await fetch(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch addresses");
    }

    const data = await response.json();

    return data.addresses;
};

export const addAddress = async (
    token: string,
    address: Omit<Address, "_id">
): Promise<Address> => {
    const response = await fetch(API_URL, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },

        body: JSON.stringify(address),
    });

    if (!response.ok) {
        throw new Error("Failed to add address");
    }

    const data = await response.json();

    return data.address;
};