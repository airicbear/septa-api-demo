// SEPTA API constants
//
// https://www3.septa.org/#/

export const SEPTA_API_BASE_URL = 'https://www3.septa.org/api';

// Real Time Data
export const SEPTA_API_ARRIVALS = '/Arrivals/index.php';
export const SEPTA_API_TRAIN_VIEW = '/TrainView/index.php';
export const SEPTA_API_NEXT_TO_ARRIVE = '/NextToArrive/index.php';
export const SEPTA_API_TRANSIT_VIEW = '/TransitView/index.php';
export const SEPTA_API_TRANSIT_VIEW_ALL = '/TransitViewAll/index.php';
export const SEPTA_API_BUS_DETOURS = '/BusDetours/index.php';
export const SEPTA_API_ALERTS = '/Alerts/index.php';
export const SEPTA_API_ALERTS_GET_ALERT_DATA = '/Alerts/get_alert_data.php';
export const SEPTA_API_ELEVATOR = '/elevator/index.php';

// Static Data
export const SEPTA_API_RR_SCHEDULES = '/RRSchedules/index.php';
export const SEPTA_API_BUS_SCHEDULES = '/BusSchedules/index.php';
export const SEPTA_API_SMS = '/sms/index.php';
export const SEPTA_API_STOPS = '/Stops/index.php';
export const SEPTA_API_LOCATIONS = '/locations/get_locations.php';

// GTFS Data
//
// https://www3.septa.org/developer/gtfs_public.zip
export const SEPTA_API_GTFSRT_SEPTA_PA_US_SERVICE = '/gtfsrt/septa-pa-us/Service/print.php';
export const SEPTA_API_GTFSRT_SEPTARAIL_PA_US_SERVICE = '/gtfsrt/septarail-pa-us/Service/print.php';
export const SEPTA_API_GTFSRT_SEPTA_PA_US_TRIP = '/gtfsrt/septa-pa-us/Trip/print.php';
export const SEPTA_API_GTFSRT_SEPTARAIL_PA_US_TRIP = '/gtfsrt/septarail-pa-us/Trip/print.php';
export const SEPTA_API_GTFSRT_SEPTA_PA_US_VEHICLE = '/gtfsrt/septa-pa-us/Vehicle/print.php';
export const SEPTA_API_GTFSRT_SEPTARAIL_PA_US_VEHICLE = '/gtfsrt/septarail-pa-us/Vehicle/print.php';

// Lists
export const SEPTA_API_REAL_TIME_DATA = [
   SEPTA_API_ARRIVALS, 
   SEPTA_API_TRAIN_VIEW, 
   SEPTA_API_NEXT_TO_ARRIVE, 
   SEPTA_API_TRANSIT_VIEW, 
   SEPTA_API_TRANSIT_VIEW_ALL, 
   SEPTA_API_BUS_DETOURS, 
   SEPTA_API_ALERTS, 
   SEPTA_API_ALERTS_GET_ALERT_DATA, 
   SEPTA_API_ELEVATOR, 
];

export const SEPTA_API_STATIC_DATA = [
    SEPTA_API_RR_SCHEDULES,
    SEPTA_API_BUS_SCHEDULES,
    SEPTA_API_SMS,
    SEPTA_API_STOPS,
    SEPTA_API_LOCATIONS,
];

export const SEPTA_API_GTFS_DATA = [
    SEPTA_API_GTFSRT_SEPTA_PA_US_SERVICE,
    SEPTA_API_GTFSRT_SEPTARAIL_PA_US_SERVICE,
    SEPTA_API_GTFSRT_SEPTA_PA_US_TRIP,
    SEPTA_API_GTFSRT_SEPTARAIL_PA_US_TRIP,
    SEPTA_API_GTFSRT_SEPTA_PA_US_VEHICLE,
    SEPTA_API_GTFSRT_SEPTARAIL_PA_US_VEHICLE,
];

export const SEPTA_API_ALL_DATA = [
    ...SEPTA_API_REAL_TIME_DATA,
    ...SEPTA_API_STATIC_DATA,
    ...SEPTA_API_GTFS_DATA,
];