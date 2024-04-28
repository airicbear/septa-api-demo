interface ArrivalsModel {
    northbound: ArrivalModel;
    southbound: ArrivalModel;
}

interface ArrivalModel {
    direction: String;
    path: string;
    train_id: string;
    origin: string;
    destination: string;
    line: string;
    status: string;
    service_type: string;
    next_station: string;
    sched_time: string;
    depart_time: string;
    track: string;
    track_change: string;
    platform: string;
    platform_change: string;
}

export default ArrivalsModel;