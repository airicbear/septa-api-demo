interface TrainViewModel {
    lat: string;
    lon: string;
    trainno: string;
    service: string;
    dest: string;
    currentstop: string;
    nextstop: string;
    line: string;
    consist: string;
    heading: string;
    late: number;
    source: string;
    track: string;
    track_change: string;
}

export default TrainViewModel;