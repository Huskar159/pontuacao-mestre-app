import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

const Checkout = () => {
  const navigate = useNavigate();
  const { user, purchasePlan } = useAuth();

  const handlePurchase = async () => {
    const success = await purchasePlan("basico");
    if (success) {
      navigate("/pontuacao");
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <Button onClick={handlePurchase}>Comprar Plano Básico</Button>
    </div>
  );
};

export default Checkout;
