package com.marwane.ml_core_api.model.view;

import java.sql.Date;

public interface schedule {
    Integer getGame_id();
    Integer getTeam1_id();
    String getTeam1();
    Integer getTeam2_id();
    String getTeam2();
    Date getDate();
    String getStart_Time();
    String getCourt();
    Integer getPlayoff();
}
