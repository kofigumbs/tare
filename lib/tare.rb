require 'json'

T = JSON.parse File.read(File.expand_path('template.json', __dir__))
C = JSON.parse File.read(File.expand_path('characters.json', __dir__))

module Tare
  class << self
    private

    def s ratio, styles, layout = T['defaultLayout']
      [T['s'][0], ratio, T['s'][1], layout, styles, T['s'][2]].join
    end

    def v height
      s T['v'][0], T['right'], [T['v'][1], height].join
    end

    def draw commands
      commands.map do |command, *options|
        case command
        when 's'
          s T[options[0]], options[1..].map{ |x| T[x] }.join
        when 'v'
          v T[options[0]]
        end
      end
    end

    def characters
      @characters ||= C.map do |character, columns|
        [
          character,
          [
            T['character'][0],
            columns.count,
            T['character'][1],
            character,
            T['character'][2],
            columns.map{ |commands| [T['character'][3], draw(commands).join, T['character'][4]].join }.join,
            T['character'][5]
          ].join
        ]
      end.to_h
    end
  end

  def self.html text
    [
      T['html'][0],
      text.gsub('"', '&quot;'),
      T['html'][1],
      text.upcase.chars.map{ |character| characters[character] }.compact.join,
      T['html'][2]
    ].join
  end
end
