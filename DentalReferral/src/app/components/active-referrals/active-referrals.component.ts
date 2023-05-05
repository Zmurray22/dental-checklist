import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {HOME_OFFICE_DR, REFERRED_DR} from "../../../assets/constants";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

interface MockDataList {
  patientFirstName: string;
  patientLastName: string;
  DOB: Date;
  date: Date;
  referringDoc: string;
  referredDoc: string;
}
const testDate: Date = new Date(2023, 5, 25);

const ELEMENT_DATA: MockDataList[] = [
  {patientFirstName: "test", patientLastName: 'test', DOB: testDate, date: testDate, referringDoc: 'test', referredDoc: 'test'},
  {patientFirstName: "test1", patientLastName: 'test1', DOB: testDate, date: testDate, referringDoc: 'test1', referredDoc: 'test1'},
  {patientFirstName: "test2", patientLastName: 'test2', DOB: testDate, date: testDate, referringDoc: 'test2', referredDoc: 'test2'},
  {patientFirstName: "test3", patientLastName: 'test3', DOB: testDate, date: testDate, referringDoc: 'test3', referredDoc: 'test3'},
  {patientFirstName: "test4", patientLastName: 'test4', DOB: testDate, date: testDate, referringDoc: 'test4', referredDoc: 'test4'},
  {patientFirstName: "test5", patientLastName: 'test5', DOB: testDate, date: testDate, referringDoc: 'test5', referredDoc: 'test5'},
  {patientFirstName: "test6", patientLastName: 'test6', DOB: testDate, date: testDate, referringDoc: 'test6', referredDoc: 'test6'},
  {patientFirstName: "test7", patientLastName: 'test7', DOB: testDate, date: testDate, referringDoc: 'test7', referredDoc: 'test7'},
  {patientFirstName: "test8", patientLastName: 'test8', DOB: testDate, date: testDate, referringDoc: 'test8', referredDoc: 'test8'},
  {patientFirstName: "test9", patientLastName: 'test9', DOB: testDate, date: testDate, referringDoc: 'test9', referredDoc: 'test9'},
  {patientFirstName: "test10", patientLastName: 'test10', DOB: testDate, date: testDate, referringDoc: 'test10', referredDoc: 'test10'},
  {patientFirstName: "test11", patientLastName: 'test11', DOB: testDate, date: testDate, referringDoc: 'test11', referredDoc: 'test11'},
  {patientFirstName: "test12", patientLastName: 'test12', DOB: testDate, date: testDate, referringDoc: 'test12', referredDoc: 'test12'},
  {patientFirstName: "test13", patientLastName: 'test13', DOB: testDate, date: testDate, referringDoc: 'test13', referredDoc: 'test13'},
  {patientFirstName: "test14", patientLastName: 'test14', DOB: testDate, date: testDate, referringDoc: 'test14', referredDoc: 'test14'},
  {patientFirstName: "test15", patientLastName: 'test15', DOB: testDate, date: testDate, referringDoc: 'test15', referredDoc: 'test15'},
  {patientFirstName: "test16", patientLastName: 'test16', DOB: testDate, date: testDate, referringDoc: 'test16', referredDoc: 'test16'}
];

@Component({
  selector: 'app-active-referrals',
  templateUrl: './active-referrals.component.html',
  styleUrls: ['./active-referrals.component.css']
})


export class ActiveReferralsComponent implements AfterViewInit{

    protected readonly HOME_OFFICE_DR = HOME_OFFICE_DR;
    protected readonly REFERRED_DR = REFERRED_DR;

  displayedColumns: string[] = ['patientFirstName', 'patientLastName', 'DOB', 'date', 'referringDoc', 'referredDoc'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  defaultSort: Sort = {active: 'patientLastName', direction: 'asc'};

  @ViewChild(MatSort) sort: MatSort = new MatSort();

  constructor() {
  }

  ngAfterViewInit() {
    this.setSort();
  }

  setSort() {
    this.sort.active = this.defaultSort.active;
    this.sort.direction = this.defaultSort.direction;
    this.defaultSort= this.sort;
    this.sort.sortChange.emit(this.defaultSort);
    this.dataSource.sort = this.sort;
  }
}
