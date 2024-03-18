import PlanInterface from "../interfaces/plan.interface";

const listPlans = async (): Promise<PlanInterface[]> => {
  try {
    const response = await fetch(`http://localhost:3000/plans`);
    if (!response.ok) {
      throw new Error("Error to fetch plans");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error to fetch plans:", error);
    return [];
  }
};
export default listPlans;
