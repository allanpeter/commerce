import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PlanService {
  private readonly dataFilePath: string;
  constructor() {
    this.dataFilePath = path.resolve('../backend/src/assets/', 'plans.json');
  }
  private readDataFile(): any[] {
    try {
      const rawData = fs.readFileSync(this.dataFilePath);
      return JSON.parse(rawData.toString());
    } catch (error) {
      console.error('Error to read datafile:', error);
      return [];
    }
  }

  private writeDataFile(data: any[]): void {
    try {
      fs.writeFileSync(this.dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error to write on datafile:', error);
    }
  }

  findAll() {
    console.log(this.readDataFile());
    return this.readDataFile();
  }

  findById(id: number) {
    const data = this.readDataFile();
    return data.find((item) => item.id == id);
  }

  createPlan(newItem: any) {
    const data = this.readDataFile();
    const id = data.length > 0 ? data[data.length - 1].id + 1 : 1;
    const itemWithId = { id, ...newItem };
    data.push(itemWithId);
    this.writeDataFile(data);
    return itemWithId;
  }

  updatePlan(id: number, updatedItem: any) {
    const data = this.readDataFile();
    const index = data.findIndex((item) => item.id == id);
    if (index !== -1) {
      const updatedData = [...data];
      updatedData[index] = { ...updatedData[index], ...updatedItem };
      this.writeDataFile(updatedData);
      return updatedData[index];
    } else {
      return null;
    }
  }

  deletePlan(id: number) {
    const data = this.readDataFile();
    const index = data.findIndex((item) => item.id == id);
    if (index !== -1) {
      const updatedData = data.filter((item) => item.id != id);
      this.writeDataFile(updatedData);
      return true;
    } else {
      return false;
    }
  }
}
