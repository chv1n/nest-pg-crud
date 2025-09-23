import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { error } from 'console';

@Injectable()
export class CitiesService {

  constructor(
    @InjectRepository(City)
    private readonly citiesRepo: Repository<City>
  ) { }


  async create(createCityDto: CreateCityDto) {
    return await this.citiesRepo.save(createCityDto);
  }

  async findAll() {
    const cities = await this.citiesRepo.find();
    return cities;
  }

  findOne(id: number) {
    return this.citiesRepo.findOneBy({ id });
  }

  async update(id: number, updateCityDto: UpdateCityDto) {
    const city = await this.citiesRepo.findOneBy({ id });
    if (!city) throw new NotFoundException(`User not found`)

    const updated = Object.assign(city, updateCityDto);

    return this.citiesRepo.save(updated);
  }

  async remove(id: number) {
    return await this.citiesRepo.delete({id});
  }
}
