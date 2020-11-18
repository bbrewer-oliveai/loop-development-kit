using System;
using System.Collections.Generic;
using Google.Protobuf.WellKnownTypes;
using Proto;

namespace OliveHelpsLDK.Whispers
{
    public struct WhisperStyle
    {
        public string BackgroundColor;
        public string PrimaryColor;
        public string HighlightColor;
    }

    public struct WhisperConfig
    {
        public string Icon;
        public string Label;
        public WhisperStyle Style;
    }

    public struct WhisperMarkdown
    {
        public string Markdown;
        public WhisperConfig Config;
    }

    public struct WhisperConfirm
    {
        public string Markdown;
        public WhisperConfig Config;
        public string ResolveLabel;
        public string RejectLabel;
    }

    public struct WhisperForm
    {
        public string Markdown;
        public WhisperConfig Config;
        public string SubmitLabel;
        public string CancelLabel;
        public IDictionary<string, Forms.Inputs.IBase> Inputs;
    }
}

namespace OliveHelpsLDK.Whispers.Forms
{
    
    public interface IWhisperFormResponse {}

    public struct WhisperUpdate : IWhisperFormResponse
    {
        public string Key;
        public Outputs.IBase Output;
    }

    public struct WhisperResult : IWhisperFormResponse
    {
        public bool Result;

        public bool IsSubmitted => Result;
        public bool IsRejected => !Result;

        public IDictionary<string, Outputs.IBase> Outputs;
    }
}

namespace OliveHelpsLDK.Whispers.Forms.Outputs
{
    public interface IBase
    {
    }

    public interface IBase<T> : IBase
    {
        T Value { get; }
    }
    
    public interface INone : IBase {}

    public interface ICheckbox : IBase<bool>
    {
    }

    public interface IEmail : IBase<string>
    {
    }

    public interface IMarkdown : IBase<string>
    {
    }

    public interface INumber : IBase<float>
    {
    }

    public interface IPassword : IBase<string>
    {
    }

    public interface IRadio : IBase<string>
    {
    }

    public interface ISelect : IBase<string>
    {
    }

    public interface ITelephone : IBase<string>
    {
    }

    public interface IText : IBase<string>
    {
    }

    public interface ITime : IBase<DateTimeOffset>
    {
    }

    public struct None : INone
    {
        
    }
    
    public struct Checkbox : ICheckbox
    {
        public bool Value { get; set; }
    }

    public struct Email : IEmail
    {
        public string Value { get; set; }
    }
    
    public struct Markdown :IMarkdown
    {
        public string Value { get; set; }
    }
    
    public struct Number : INumber
    {
        public float Value { get; set; }
    }
    
    public struct Password : IPassword
    {
        public string Value { get; set; }
    }

    public struct Radio : IRadio
    {
        public string Value { get; set; }
    }
    public struct Select : ISelect
    {
        public string Value { get; set; }
    }
    
    public struct Telephone : ITelephone
    {
        public string Value { get; set; }
    }

    public struct Text : IText
    {
        public string Value { get; set; }
    }

    public struct Time : ITime
    {
        public DateTimeOffset Value { get; set; }
    } 
}

namespace OliveHelpsLDK.Whispers.Forms.Inputs
{
    public interface IProtoable<T>
    {
        T ToProto();
    }

    public interface IBase
    {
        string Label { get; }
        string Tooltip { get; }
        int Order { get; }
    }

    public interface ICheckbox : IBase, IProtoable<Proto.WhisperFormInput.Types.Checkbox>
    {
        bool Value { get; }
    }

    public interface IEmail : IBase, IProtoable<Proto.WhisperFormInput.Types.Email>
    {
        string Value { get; }
    }

    public interface IMarkdown : IBase, IProtoable<Proto.WhisperFormInput.Types.Markdown>
    {
        string Value { get; }
    }

    public interface INumber : IBase, IProtoable<Proto.WhisperFormInput.Types.Number>
    {
        float Value { get; }
        float Min { get; }
        float Max { get; }
    }

    public interface IPassword : IBase, IProtoable<Proto.WhisperFormInput.Types.Password>
    {
    }

    public interface IRadio : IBase, IProtoable<Proto.WhisperFormInput.Types.Radio>
    {
        string[] Options { get; }
    }

    public interface ISelect : IBase, IProtoable<Proto.WhisperFormInput.Types.Select>
    {
        string[] Options { get; }
    }

    public interface ITelephone : IBase, IProtoable<WhisperFormInput.Types.Tel>
    {
        string Value { get; }
        string Pattern { get; }
    }

    public interface IText : IBase, IProtoable<Proto.WhisperFormInput.Types.Text>
    {
        string Value { get; }
    }

    public interface ITime : IBase, IProtoable<Proto.WhisperFormInput.Types.Time>
    {
        DateTimeOffset Value { get; }
    }

    public struct Checkbox : ICheckbox
    {
        public string Label { get; set; }
        public string Tooltip { get; set; }
        public int Order { get; set; }
        public bool Value { get; set; }

        public WhisperFormInput.Types.Checkbox ToProto()
        {
            return new WhisperFormInput.Types.Checkbox
            {
                Label = Label,
                Tooltip = Tooltip,
                Order = checked((uint) Order),
                Value = Value
            };
        }
    }

    public struct Email : IEmail
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }

        public string Value { get; }

        public WhisperFormInput.Types.Email ToProto()
        {
            return new WhisperFormInput.Types.Email
            {
                Label = Label,
                Tooltip = Tooltip,
                Order = checked((uint) Order),
                Value = Value
            };
        }
    }

    public struct Markdown : IMarkdown
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }
        public string Value { get; }

        public WhisperFormInput.Types.Markdown ToProto()
        {
            return new WhisperFormInput.Types.Markdown
            {
                Label = Label,
                Tooltip = Tooltip,
                Order = checked((uint) Order),
                Value = Value
            };
        }
    }

    public struct Number : INumber
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }

        public float Value { get; }

        public float Min { get; }

        public float Max { get; }

        public WhisperFormInput.Types.Number ToProto()
        {
            return new WhisperFormInput.Types.Number
            {
                Label = Label,
                Tooltip = Tooltip,
                Order = checked((uint) Order),
                Value = Value,
                Max = Max,
                Min = Min,
            };
        }
    }

    public struct Password : IPassword
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }

        public WhisperFormInput.Types.Password ToProto()
        {
            return new WhisperFormInput.Types.Password
            {
                Label = Label,
                Order = checked((uint) Order),
                Tooltip = Tooltip
            };
        }
    }

    public struct Radio : IRadio
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }

        public WhisperFormInput.Types.Radio ToProto()
        {
            var radio = new WhisperFormInput.Types.Radio
            {
                Label = Label,
                Order = checked((uint) Order),
                Tooltip = Tooltip,
            };
            foreach (var option in Options)
            {
                radio.Options.Add(option);
            }

            return radio;
        }

        public string[] Options { get; }
    }

    public struct Select : ISelect
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }

        public WhisperFormInput.Types.Select ToProto()
        {
            var select = new WhisperFormInput.Types.Select
            {
                Label = Label,
                Order = checked((uint) Order),
                Tooltip = Tooltip,
            };
            foreach (var option in Options)
            {
                select.Options.Add(option);
            }

            return select;
        }

        public string[] Options { get; }
    }

    public struct Telephone : ITelephone
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }

        public string Value { get; }

        public string Pattern { get; }

        public WhisperFormInput.Types.Tel ToProto()
        {
            return new WhisperFormInput.Types.Tel
            {
                Label = Label,
                Order = checked((uint) Order),
                Tooltip = Tooltip,
                Value = Value,
                Pattern = Pattern,
            };
        }
    }

    public struct Text : IText
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }

        public string Value { get; }

        public WhisperFormInput.Types.Text ToProto()
        {
            return new WhisperFormInput.Types.Text
            {
                Label = Label,
                Order = checked((uint) Order),
                Tooltip = Tooltip,
                Value = Value,
            };
        }
    }

    public struct Time : ITime
    {
        public string Label { get; }
        public string Tooltip { get; }
        public int Order { get; }
        public DateTimeOffset Value { get; }

        public WhisperFormInput.Types.Time ToProto()
        {
            return new WhisperFormInput.Types.Time
            {
                Label = Label,
                Order = checked((uint) Order),
                Tooltip = Tooltip,
                Value = Timestamp.FromDateTimeOffset(Value),
            };
        }
    }
}