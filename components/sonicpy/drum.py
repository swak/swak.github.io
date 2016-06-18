# Welcome to Sonic Pi v2.10
# SONG
# by swak

live_loop :time, auto_cue: false do |idx|
  sample :bd_haus, amp: 2.2
  sleep 0.5
end

live_loop :bikes do |idx|
  sleep 1
  sample :bd_zum, amp: 2.0
end

live_loop :bikes do |idx|
  sleep 0.25
  sample :bd_klub, amp: 1.5
end

live_loop :bikes do |idx|
  sleep 2
  sample :bd_sone, amp: 1.5
end

live_loop :lands, auto_cue: false do |idx|
  use_synth :dsaw
  use_random_seed 42000
  with_fx :reverb, room: 1  do
    16.times do
      ns = (scale :c1, :melodic_minor, num_octaves: 2)
      play ns.choose, detune: 0, release: 0.1, amp: 4, amp: rand + 0.5, cutoff: rrand(80, 110);
      sleep 0.125
    end
  end
end