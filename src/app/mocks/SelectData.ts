import { OptionsModel } from "../models/OptionsModel";

export const options: OptionsModel[] = [
    {
      value: 1,
      name: 'Default sorting',
      status: 'OK'
    },
    {
      value: 2,
      name: 'Sort by popularity',
      status: 'OK'
    },
    {
      value: 3,
      name: 'Sort by average',
      status: 'KO'
    },
    {
      value: 4,
      name: 'Sort by newness',
      status: 'OK'
    },
    {
      value: 5,
      name: 'Sort by price: low to high',
      status: 'KO'
    },
    {
      value: 6,
      name: 'Sort by price: high to low',
      status: 'KO'
    }
];