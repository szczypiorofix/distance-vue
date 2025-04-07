import type { DistanceInMetersAndKilometers } from '@/models/Distance.ts'
import type { Point } from '@/models/Point.ts'

export function calculateDistance(
  point1: Point,
  point2: Point,
): DistanceInMetersAndKilometers {
  const earthsRadius = 6371e3
  const lat1InRadian = (point1.lat * Math.PI) / 180
  const lat2InRadian = (point2.lat * Math.PI) / 180
  const latDifferenceInRadian = ((point2.lat - point1.lat) * Math.PI) / 180
  const lonDifferenceInRadian = ((point2.lon - point1.lon) * Math.PI) / 180

  const haversine =
    Math.sin(latDifferenceInRadian / 2) * Math.sin(latDifferenceInRadian / 2) +
    Math.cos(lat1InRadian) *
      Math.cos(lat2InRadian) *
      Math.sin(lonDifferenceInRadian / 2) *
      Math.sin(lonDifferenceInRadian / 2)
  const centralAngle = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine))

  const distanceInMeters = earthsRadius * centralAngle
  const distanceInKilometers = distanceInMeters / 1000

  return {
    meters: distanceInMeters.toFixed(2),
    kilometers: distanceInKilometers.toFixed(2),
  }
}
