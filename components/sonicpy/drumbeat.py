# Welcome to Sonic Pi v2.10
# SONG
# by swak

live_loop :time, auto_cue: false do |idx|
  sample :bd_haus, amp: 2.5
  sleep 0.5
end

live_loop :bikes do |idx|
  sleep 0.25
  sample :bd_klub, amp: 1.5
end