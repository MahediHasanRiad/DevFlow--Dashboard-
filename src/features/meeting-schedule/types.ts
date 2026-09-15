export interface MeetingItem {
  id: string;
  dateCreated: string;
  clientOrderId: string;
  meetingDateTime: string;
  remainingTime: string;
  assignedTeam: string;
  meetingType: string;
  meetingLink: string;
  salesStatus: 'urgent' | 'upcoming' | 'done' | 'pending';
  opsStatus: 'pending' | 'completed' | 'cancelled';
  lifecycle: 'scheduled' | 'in-progress' | 'completed' | 'verified';
  createdBy: string;
}

export interface MeetingFilters {
  startDate: string;
  endDate: string;
  searchQuery: string;
  salesStatus: string;
  opsStatus: string;
  lifecycle: string;
}

export interface MeetingStats {
  meetingsToday: number;
  upcoming24h: number;
  totalDone: number;
  totalMeetings: number;
  totalCancelled: number;
}
