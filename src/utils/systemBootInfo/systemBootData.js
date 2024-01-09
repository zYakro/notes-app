export const systemBootData = 
`[  OK  ] Finished systemd-tmpfiles-setup.service - Create Volatile Files and Directories.
[  OK  ] Mounted proc-sys-fs-binfmt_misc.mount - Arbitrary Executable File Formats File System.
         Starting systemd-timesyncd.service - Network Time Synchronization...
         Starting systemd-update-utmp.service - Record System Boot/Shutdown in UTMP...
[  OK  ] Finished systemd-binfmt.service - Set Up Additional Binary Formats.
[  OK  ] Finished systemd-update-utmp.service - Record System Boot/Shutdown in UTMP.
[  OK  ] Started systemd-timesyncd.service - Network Time Synchronization.
[  OK  ] Reached target time-set.target - System Time Set.
[  OK  ] Finished apparmor.service - Load AppArmor profiles.
[  OK  ] Reached target sysinit.target - System Initialization.
[  OK  ] Started cups.path - CUPS Scheduler.
[  OK  ] Started anacron.timer - Trigger anacron every hour.
[  OK  ] Started apt-daily.timer - Daily apt download activities.
[  OK  ] Started apt-daily-upgrade.timer - Daily apt upgrade and clean activities.
[  OK  ] Started dpkg-db-backup.timer - Daily dpkg database backup timer.
[  OK  ] Started e2scrub_all.timer - Periodic ext4 Online Metadata Check for All Filesystems.
[  OK  ] Started fstrim.timer - Discard unused blocks once a week.
[  OK  ] Started fwupd-refresh.timer - Refresh fwupd metadata regularly.
[  OK  ] Started logrotate.timer - Daily rotation of log files.
[  OK  ] Started man-db.timer - Daily man-db regeneration.
[  OK  ] Started systemd-tmpfiles-clean.timer - Daily Cleanup of Temporary Directories.
[  OK  ] Reached target paths.target - Path Units.
[  OK  ] Reached target timers.target - Timer Units.
[  OK  ] Listening on avahi-daemon.socket - Avahi mDNS/DNS-SD Stack Activation Socket.
[  OK  ] Listening on cups.socket - CUPS Scheduler.
[  OK  ] System up.
`