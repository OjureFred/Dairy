export class DiaryItem {
    showDetails: boolean;

    constructor(public id: number, public title: string, public date: Date, public startTime: string, public duration: number) {
        this.showDetails = false;
    }
    
}
