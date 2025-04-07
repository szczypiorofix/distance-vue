import { calculateDistance } from '../../utils/distance';
import { describe, expect, it } from 'vitest'
import type { DistanceInMetersAndKilometers } from '@/models/Distance.ts'
import type { Point } from '@/models/Point.ts'

describe('calculateDistance', () => {
  it('calculates distance properly', () => {
    const point1: Point = {
      lat: 51.22,
      lon: 21.86
    };
    const point2: Point = {
      lat: 50.76,
      lon: 20.36
    };
    const distance: DistanceInMetersAndKilometers = calculateDistance(point1, point2);
    const expecctedDistance: DistanceInMetersAndKilometers = {
      meters: "116782.52",
      kilometers: "116.78"
    };
    expect(distance).toEqual(expecctedDistance);
  });
});
