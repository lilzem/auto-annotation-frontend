
type ScrollbarStyle = {
  color?: string;
  size?: string;
};

interface ThemeScrollbar {
  light(): ScrollbarOptions;
  dark(): ScrollbarOptions;
}

export class Scrollbar implements ThemeScrollbar {
  light(): ScrollbarOptions {
    return ScrollbarOptions.forDefault({
      color: "#b8b8b8",
      size: "14px",
    });
  }

  dark(): ScrollbarOptions {
    return ScrollbarOptions.forDefault({
      color: "#36445c",
      size: "14px",
    });
  }
}

class ScrollbarOptions {
  static forDefault(opts: ScrollbarStyle = {}): ScrollbarOptions {
    return new ScrollbarOptions(opts);
  }

  constructor(private opts: ScrollbarStyle) {}

  withColor(color: string): ScrollbarOptions {
    return new ScrollbarOptions({ ...this.opts, color });
  }

  withThickness(size: string): ScrollbarOptions {
    return new ScrollbarOptions({ ...this.opts, size });
  }

  css(): string {
    const { color = "#36445c", size = "14px" } = this.opts;
    const sizeNumber = parseInt(size);

    return this.getWebkitScrollbar(color, sizeNumber);
  }

  private getWebkitScrollbar(color: string, sizeNumber: number): string {
    return `
      ${this.getWebkitScrollbarBase(sizeNumber)}
      ${this.getWebkitScrollbarTrack()}
      ${this.getWebkitScrollbarThumb(color, sizeNumber)}
    `;
  }

  private getWebkitScrollbarBase(sizeNumber: number): string {
    return `
      &::-webkit-scrollbar {
        width: ${sizeNumber}px !important; 
        height: ${sizeNumber}px !important;
      }
    `;
  }

  private getWebkitScrollbarTrack(): string {
    return `
      &::-webkit-scrollbar-track {
        background: transparent;
      }
    `;
  }

  private getWebkitScrollbarThumb(color: string, sizeNumber: number): string {
    return `
      &::-webkit-scrollbar-thumb {
        background-color: ${color};
        border-radius: 100px;
        border: ${sizeNumber / 4.6}px solid transparent;
        background-clip: content-box;
      }
    `;
  }
}
