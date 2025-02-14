import type { CurrentRecordingStatus, GenericResponse, RecordingData } from './definitions';
export declare class VoiceRecorderImpl {
    private mediaRecorder;
    private chunks;
    private pendingResult;
    private options?;
    static canDeviceVoiceRecord(): Promise<GenericResponse>;
    startRecording(options?: {
        chunkDurationMs?: number;
    }): Promise<GenericResponse>;
    stopRecording(): Promise<RecordingData>;
    static hasAudioRecordingPermission(): Promise<GenericResponse>;
    static requestAudioRecordingPermission(): Promise<GenericResponse>;
    pauseRecording(): Promise<GenericResponse>;
    resumeRecording(): Promise<GenericResponse>;
    getCurrentStatus(): Promise<CurrentRecordingStatus>;
    static getSupportedMimeType(): string | null;
    private onSuccessfullyStartedRecording;
    private onFailedToStartRecording;
    private static blobToBase64;
    private prepareInstanceForNextOperation;
}
