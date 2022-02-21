require 'json'

T = JSON.parse File.read(File.expand_path('template.json', __dir__))
C = JSON.parse File.read(File.expand_path('characters.json', __dir__))

module Tare
  class << self
    private

    def render template, args
      template.gsub('{}') { args.shift }
    end

    def s outer, inner
      render T['s'], [outer, T['defaultLayout'] + inner]
    end

    def v height
      render T['s'], [T['vOuter'], T['vInner'] + T['right'] + height]
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
          render(T['character'], [
            columns.count,
            character,
            columns.map{ |commands| render T['column'], [draw(commands).join] }.join,
          ]),
        ]
      end.to_h
    end
  end

  def self.html text
    render T['html'], [
      text.gsub('"', '&quot;'),
      text.upcase.chars.map{ |character| characters[character] }.compact.join,
    ]
  end
end
